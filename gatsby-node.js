const fs = require(`fs`);
const { createFilePath } = require("gatsby-source-filesystem");
const yaml = require(`js-yaml`);
const path = require(`path`);

const contentSources = yaml.safeLoad(fs.readFileSync(`./content-sources.yaml`, `utf-8`));
const tocSources = yaml.safeLoad(fs.readFileSync(`./toc-sources.yaml`, `utf-8`));

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField, getParent } = actions
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const gitRemoteNode = getNode(fileNode.gitRemote___NODE);
    if (gitRemoteNode) {
      const relativeFilePath = createFilePath({
        node,
        getNode,
        basePath: "",
      })
      createNodeField({
        node,
        name: "slug",
        value: gitRemoteNode.sourceInstanceName + `${relativeFilePath}`,
      })
    }
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
              fields {
                slug
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
  let page_path = "";

  mdx.forEach(({ node }, index) => {
    if (node.slug) {
      if (node.fields && node.fields.slug) {
        page_path = node.fields.slug;
      } else {
        page_path = createPagePath(node);
      }
      createPage({
        path: page_path,
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
