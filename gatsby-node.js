const fs = require(`fs`);
const { createFilePath } = require("gatsby-source-filesystem");
const yaml = require(`js-yaml`);
const path = require(`path`);

const contentSources = yaml.safeLoad(fs.readFileSync(`./content-sources.yaml`, `utf-8`));
const tocSources = yaml.safeLoad(fs.readFileSync(`./toc-sources.yaml`, `utf-8`));

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    // // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    // const relativeFilePath = createFilePath({
    //   node,
    //   getNode,
    //   basePath: "data/faqs/",
    // })

    // // Creates new query'able field with name of 'slug'
    // createNodeField({
    //   node,
    //   name: "slug",
    //   value: `/faqs${relativeFilePath}`,
    // })
  }
}

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
        // path: node.slug,
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
  let slug = node.slug;
  if (node.slug == "README") {
    slug = ""
  }
  return path.join(prefix, slug);
}
