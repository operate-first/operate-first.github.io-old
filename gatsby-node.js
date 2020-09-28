const fs = require(`fs`);
const yaml = require(`js-yaml`);
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const contentSources = yaml.safeLoad(fs.readFileSync(`./content_config.yaml`, `utf-8`));
const pathPrefixMap = {};
contentSources.forEach(({ filePath, urlPrefix }) => {
  pathPrefixMap[filePath] = urlPrefix;
});

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect, createPage } = actions;

  createRedirect({
    fromPath: `/`,
    toPath: `/operate-first`,
    redirectInBrowser: true,
    isPermanent: true,
  });

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
    }
  });
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest, reporter }) => {
  const tocSources = contentSources.map((cs) => cs.toc);
  tocSources.forEach((tocSource) => {
    const navData = yaml.safeLoad(fs.readFileSync(`${__dirname}/${tocSource}`, `utf-8`));
    navData.forEach((navItem) => {
      const { id, label, href, links } = navItem;
      actions.createNode({
        id: createNodeId(`NavItem-${id}`),
        label,
        href,
        links,
        internal: {
          type: `NavItem`,
          contentDigest: createContentDigest(navItem),
        },
      });
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
