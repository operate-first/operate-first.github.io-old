const fs = require(`fs`);
const { createFilePath } = require('gatsby-source-filesystem');
const yaml = require(`js-yaml`);
const path = require(`path`);
const { nanoid } = require(`nanoid`);

const tocSources = yaml.safeLoad(fs.readFileSync(`./config/toc-sources.yaml`, `utf-8`));

const supportedTemplates = ['JupyterNotebook', 'MarkdownRemark', 'Mdx'];

// Enrich inferred nodes by a slug and srcLink
exports.onCreateNode = ({ node, getNode, actions: { createNodeField }, reporter }) => {
  if (!supportedTemplates.includes(node.internal.type)) {
    return;
  }

  const fileNode = getNode(node.parent);
  const gitRemoteNode = getNode(fileNode.gitRemote___NODE);

  const slug =
    (gitRemoteNode ? `/${gitRemoteNode.sourceInstanceName}` : '') +
    createFilePath({
      node,
      getNode,
      basePath: '',
      trailingSlash: false,
    }) +
    (fileNode.name !== 'index' ? `.${fileNode.extension}` : '');

  const srcLink =
    (gitRemoteNode
      ? `${gitRemoteNode.webLink}/blob/master/`
      : `${getNode('Site').siteMetadata.srcLinkDefault}/blob/master/content/`) +
    fileNode.relativePath;

  createNodeField({ node, name: 'slug', value: slug });
  createNodeField({ node, name: 'srcLink', value: srcLink });

  reporter.info(`node created: ${slug}`);
};

// Create page nodes with appropriate template component, path and id
exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
  return Promise.all(
    supportedTemplates.map(async (type) => {
      const component = path.resolve(`./src/templates/${type}.js`);
      const result = await graphql(`{ all${type} { edges { node { id, fields { slug }}}}}`);

      if (result.errors) {
        reporter.panicOnBuild(`ERROR: Loading "createPages" query`);
      }

      result.data[`all${type}`].edges.map(({ node: { id, fields } }) => {
        const path = fields.slug;

        createPage({ path, component, context: { id } });
        reporter.info(`page created: ${path}`);
        if (path.toLowerCase().endsWith('/readme.md')) {
          const shorterPath = path.slice(0, -10);
          createPage({ path: shorterPath, component, context: { id } });
          reporter.info(`page created: ${shorterPath} (trimmed "/readme.md")`);
        }
      });
    })
  );
};

// Create new node collection `NavData` for navigation, parsing table of content files `tocSources`
exports.sourceNodes = ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const navItems = tocSources.flatMap((tocSource) => {
    const fileLocation = `${__dirname}/${tocSource}`;
    if (!fs.existsSync(fileLocation)) {
      reporter.error(`Table of Contents file ${fileLocation} missing.  Skipped.`);
      return [];
    }
    const toc = yaml.safeLoad(fs.readFileSync(fileLocation, `utf-8`));

    return toc.map((navItem) => ({
      ...navItem,
      id: navItem.id || nanoid(),
      links: navItem.links && navItem.links.map((link) => ({ ...link, id: link.id || nanoid() })),
    }));
  });

  createNode({
    id: createNodeId(`NavData`),
    navItems,
    internal: {
      type: `NavData`,
      contentDigest: createContentDigest(navItems),
    },
  });

  reporter.success('nodes created: NavData');
};

// Enrich graphql schema with custom types
exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type Frontmatter @infer {
      banner: String @md
    }
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
    }
  `);
};
