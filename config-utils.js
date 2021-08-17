const fs = require('fs');
const yaml = require('js-yaml');
const contentSources = yaml.safeLoad(fs.readFileSync('./config/content-sources.yaml', 'utf-8'));

const contentPlugins = contentSources.map(createSourcePlugin);

module.exports = {
  contentPlugins,
};

function createSourcePlugin({ dir, name, ignore }) {
  return {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/${dir}`,
      name,
      ignore,
    },
  };
}
