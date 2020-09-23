const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

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
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }

  const mdx = result.data.allMdx.edges;

  mdx.forEach(({ node }, index) => {
    createPage({
      path: node.slug,
      component: docTemplate,
      context: {
        id: node.id,
        slug: node.slug,
      },
    });
  });
};
