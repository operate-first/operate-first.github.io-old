const path = require("path");
const { contentPlugins } = require("./config-utils");
const pathPrefix = process.env.PATH_PREFIX;

let config = {
  pathPrefix,
  siteMetadata: {
    title: `Operate First`,
    description: `Operate First`,
    siteUrl: `https://operate-first.cloud/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: { default: path.resolve("./src/components/Layout") },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              disableBgImageOnAlpha: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                list: "pf-c-list",
                table: "pf-c-table",
              },
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`md`],
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178212082-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Operate First`,
        short_name: `Operate First`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-meta-redirect`,
    `@rafaelquintanilha/gatsby-transformer-ipynb`,
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `data-science/data-science-workflows`,
        remote: `https://github.com/aicoe-aiops/data-science-workflows.git`,
        patterns: [`**/*.md`, `**/*.png`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `data-science/categorical-encoding`,
        remote: `https://github.com/aicoe-aiops/categorical-encoding.git`,
        patterns: [`**/*.md`, `**/*.png`, `**/*.ipynb`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `data-science/configuration-files-analysis`,
        remote: `https://github.com/aicoe-aiops/configuration-files-analysis.git`,
        patterns: [`**/*.md`, `**/*.png`, `**/*.ipynb`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `data-science/ocp-ci-analysis`,
        remote: `https://github.com/aicoe-aiops/ocp-ci-analysis.git`,
        patterns: [`**/*.md`, `**/*.png`, `**/*.ipynb`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `users/odh-moc-support`,
        remote: `https://github.com/operate-first/odh-moc-support.git`,
        patterns: [`**/*.md`, `**/*.png`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `operators/continuous-deployment`,
        remote: `https://github.com/operate-first/continuous-deployment.git`,
        patterns: [`**/*.md`, `**/*.png`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `operators/moc-cnv-sandbox`,
        remote: `https://gitlab.com/open-infrastructure-labs/moc-cnv-sandbox.git`,
        patterns: [`**/*.md`, `**/*.png`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `blueprints/blueprint`,
        remote: `https://github.com/operate-first/blueprint.git`,
        patterns: [`**/*.md`, `**/*.png`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `blueprints/continuous-delivery`,
        remote: `https://github.com/operate-first/continuous-delivery.git`,
        patterns: [`**/*.md`, `**/*.png`],
      }
    },
  ],
};

config.plugins = contentPlugins.concat(config.plugins);

module.exports = config;
