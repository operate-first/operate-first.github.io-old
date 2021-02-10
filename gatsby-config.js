const path = require("path");
const { contentPlugins } = require("./config-utils");
const pathPrefix = process.env.PATH_PREFIX;

let config = {
  pathPrefix,
  siteMetadata: {
    title: `Operate First`,
    description: `Operate First`,
    siteUrl: `https://operate-first.cloud/`,
    // default URL for all content within this repository for linking to the source of the content
    srcLinkDefault: `https://github.com/operate-first/operate-first.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-redirect-to`,
      options: {
        force: true,
        isPermanent: true,
        redirectInBrowser: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 500,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: true, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
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
              ignoreFileExtensions: [`md`, `ipynb`, `mdx`],
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: { default: path.resolve("./src/components/Layout") },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              disableBgImageOnAlpha: true,
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
              ignoreFileExtensions: [`md`, `ipynb`, `mdx`],
            },
          },
          `gatsby-remark-autolink-headers`,
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
        name: `users/data-science-workflows`,
        remote: `https://github.com/aicoe-aiops/data-science-workflows.git`,
        patterns: [`**/*.md`, `**/*.png`],
      }
    },
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
        name: `data-science/cloud-price-analysis`,
        remote: `https://github.com/aicoe-aiops/cloud-price-analysis-public.git`,
        patterns: [`**/*.md`, `**/*.png`, `**/*.ipynb`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `data-science/time-series`,
        remote: `https://github.com/aicoe-aiops/time-series.git`,
        patterns: [`**/*.md`, `**/*.png`, `**/*.ipynb`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `users/support`,
        remote: `https://github.com/operate-first/support.git`,
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
        remote: `https://github.com/open-infrastructure-labs/moc-cnv-sandbox.git`,
        patterns: [`**/*.md`, `**/*.png`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `users/argocd-apps`,
        remote: `https://github.com/operate-first/argocd-apps.git`,
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
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `data-science/ceph-drive-failure`,
        remote: `https://github.com/aicoe-aiops/ceph_drive_failure.git`,
        patterns: [`**/*.md`, `**/*.png`, `**/*.ipynb`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `users/apps`,
        remote: `https://github.com/operate-first/apps.git`,
        patterns: [`**/*.md`, `**/*.png`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `data-science/mailing-list-analysis`,
        remote: `https://github.com/aicoe-aiops/mailing-list-analysis-toolkit.git`,
        patterns: [`**/*.md`, `**/*.png`, `**/*.ipynb`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `data-science/openshift-anomaly-detection`,
        remote: `https://github.com/aicoe-aiops/openshift-anomaly-detection.git`,
        patterns: [`**/*.md`, `**/*.png`, `**/*.ipynb`],
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `operators/sre`,
        remote: `https://github.com/operate-first/SRE.git`,
        patterns: [`**/*.md`],
      }
    },
  ],
};

config.plugins = contentPlugins.concat(config.plugins);

module.exports = config;
