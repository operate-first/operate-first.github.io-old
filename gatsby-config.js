const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const localSources = yaml.safeLoad(fs.readFileSync('./config/content-sources.yaml', 'utf-8'));
const pathPrefix = process.env.PATH_PREFIX;

const remoteSources = [
  {
    name: 'users/data-science-workflows',
    remote: 'https://github.com/aicoe-aiops/data-science-workflows.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'data-science/data-science-workflows',
    remote: 'https://github.com/aicoe-aiops/data-science-workflows.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'data-science/categorical-encoding',
    remote: 'https://github.com/aicoe-aiops/categorical-encoding.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'data-science/configuration-files-analysis',
    remote: 'https://github.com/aicoe-aiops/configuration-files-analysis.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'data-science/ai4ci',
    remote: 'https://github.com/aicoe-aiops/ocp-ci-analysis.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'data-science/cloud-price-analysis',
    remote: 'https://github.com/aicoe-aiops/cloud-price-analysis-public.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'data-science/time-series',
    remote: 'https://github.com/aicoe-aiops/time-series.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'users/elyra',
    remote: 'https://github.com/thoth-station/elyra-aidevsecops-tutorial.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'users/moc-ray-demo',
    remote: 'https://github.com/erikerlandson/moc-ray-demo.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'users/pulp',
    remote: 'https://github.com/thoth-station/pulp-operate-first-web.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'users/support',
    remote: 'https://github.com/operate-first/support.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'operations/continuous-deployment',
    remote: 'https://github.com/operate-first/continuous-deployment.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'operations/moc-cnv-sandbox',
    remote: 'https://github.com/open-infrastructure-labs/moc-cnv-sandbox.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'users/argocd-apps',
    remote: 'https://github.com/operate-first/argocd-apps.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'blueprints/blueprint',
    remote: 'https://github.com/operate-first/blueprint.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'blueprints/continuous-delivery',
    remote: 'https://github.com/operate-first/continuous-delivery.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'operations/toolbox',
    remote: 'https://github.com/operate-first/toolbox',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'data-science/ceph-drive-failure',
    remote: 'https://github.com/aicoe-aiops/ceph_drive_failure.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'users/apps',
    remote: 'https://github.com/operate-first/apps.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'data-science/mailing-list-analysis',
    remote: 'https://github.com/aicoe-aiops/mailing-list-analysis-toolkit.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'data-science/openshift-anomaly-detection',
    remote: 'https://github.com/aicoe-aiops/openshift-anomaly-detection.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'data-science/pet-image-detection',
    remote: 'https://github.com/aicoe-aiops/pet-image-detection.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'data-science/data-skipping',
    remote: 'https://github.com/xskipper-io/xskipper.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
  {
    name: 'operations/sre',
    remote: 'https://github.com/operate-first/SRE.git',
    patterns: ['**/*.md'],
  },
  {
    name: 'users/sre',
    remote: 'https://github.com/operate-first/SRE.git',
    patterns: ['**/*.md'],
  },
  {
    name: 'data-science/stateful-sessions-for-intelligent-apps',
    remote: 'https://github.com/Gkrumbach07/audio-decoder-demo.git',
    patterns: ['**/*.md', '**/*.png'],
  },
  {
    name: 'community/community',
    remote: 'https://github.com/operate-first/community.git',
    patterns: ['**/*.md', '**/*.png', '**/*.ipynb'],
  },
];

module.exports = {
  pathPrefix,
  siteMetadata: {
    title: `Operate First`,
    description: `Operate First`,
    siteUrl: `https://operate-first.cloud/`,
    // default URL for all content within this repository for linking to the source of the content
    srcLinkDefault: `https://github.com/operate-first/operate-first.github.io`,
    github: 'https://github.com/operate-first',
    youtube: 'https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg',
    slack: 'https://join.slack.com/t/operatefirst/shared_invite/zt-o2gn4wn8-O39g7sthTAuPCvaCNRnLww',
    twitter: 'https://twitter.com/OperateFirst',
    clusters: [
      {
        name: 'MOC',
        clusters: [
          {
            name: 'Zero',
            url: 'http://console-openshift-console.apps.zero.massopen.cloud/',
          },
          {
            name: 'Infra',
            url: 'http://console-openshift-console.apps.moc-infra.massopen.cloud/',
          },
          {
            name: 'Smaug',
            url: 'http://console-openshift-console.apps.smaug.na.operate-first.cloud/',
          },
        ],
      },
      {
        name: 'EMEA',
        clusters: [
          {
            name: 'Rick',
            url: 'https://console-openshift-console.apps.rick.emea.operate-first.cloud/',
          },
          {
            name: 'Balrog',
            url: 'https://console-openshift-console.apps.balrog.aws.operate-first.cloud/',
          },
        ],
      },
    ],
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
            resolve: 'gatsby-remark-embed-video',
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
              backgroundColor: 'transparent',
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
                list: 'pf-c-list',
                table: 'pf-c-table',
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
    'gatsby-transformer-remark-frontmatter',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: { default: path.resolve('./src/components/Layout') },
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
                list: 'pf-c-list',
                table: 'pf-c-table',
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
        trackingId: 'UA-178212082-1',
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
    ...remoteSources.map(({ name, remote, patterns }) => ({
      resolve: `gatsby-source-git`,
      options: {
        name,
        remote,
        patterns,
        local: `${__dirname}/.content-cache/${name}`,
      },
    })),
    ...localSources.map(({ dir, name, ignore }) => ({
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/${dir}`,
        name,
        ignore,
      },
    })),
  ],
};
