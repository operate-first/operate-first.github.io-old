const fs = require(`fs`);
const yaml = require(`js-yaml`);
const path = require(`path`);

const contentSources = yaml.safeLoad(fs.readFileSync(`./content-sources.yaml`, `utf-8`));
const tocSources = yaml.safeLoad(fs.readFileSync(`./toc-sources.yaml`, `utf-8`));

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const docTemplate = path.resolve(`./src/templates/Doc.js`);
  const result = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              id
              slug
              fileAbsolutePath
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`ERROR: Loading "createPages" query`);
  }

  const mdx = result.data.allMdx.edges;

  mdx.forEach(({ node }, index) => {
    if (node.slug) {
      createPage({
        path: createPagePath(node),
        component: docTemplate,
        context: {
          id: node.id,
          slug: node.slug,
        },
      });
    } else {
      createPage({
        path: "/",
        component: docTemplate,
        context: {
          id: node.id,
          slug: "/",
        },
      });
    }
  });
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest, reporter }) => {
  let navItems = [];
  tocSources.forEach((tocSource) => {
    const fileLocation = `${__dirname}/${tocSource}`;
    if (!fs.existsSync(fileLocation)) {
      reporter.error(`Table of Contents file ${fileLocation} missing.  Skipped.`);
      return;
    }
    const toc = yaml.safeLoad(fs.readFileSync(fileLocation, `utf-8`));
    toc.forEach((navItem) => navItems.push(navItem));
    actions.createNode({
      id: createNodeId(`NavData`),
      navItems: navItems,
      internal: {
        type: `NavData`,
        contentDigest: createContentDigest(navItems),
      },
    });
  });
};

function createPagePath(node) {
  const pathMatch = contentSources.find((cs) => {
    let dirPath = cs.dir;
    if (dirPath[0] !== "/") {
      dirPath = `/${dirPath}`;
    }
    if (dirPath[dirPath.length - 1] !== "/") {
      dirPath = `${dirPath}/`;
    }
    return node.fileAbsolutePath.includes(dirPath);
  });
  let prefix = "";
  if (pathMatch && pathMatch.urlPrefix) {
    prefix = pathMatch.urlPrefix;
  }
  return path.join(prefix, node.slug);
}
