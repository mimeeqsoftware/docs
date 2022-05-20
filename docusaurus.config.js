const path = require('path');

module.exports = {
  title: "Mimeeq Documentation",
  tagline: "",
  url: "https://documentation.mimeeq.co.uk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icon-256x256.png",
  organizationName: "mimeeqsoftware", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: 'FIXCMVY237',
      apiKey: '4f9c1630b405aff8437ed23c9f149020',
      indexName: 'mimeeq_docs',
      contextualSearch: false,
    },
    navbar: {
      title: "Mimeeq Documentation",
      logo: {
        alt: "Mimeeq",
        src: "img/logo.svg",
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: "https://app.mimeeq.co.uk",
          label: "Go to app",
          position: "right",
        },
        {
          href: "mailto:support@mimeeq.co.uk",
          label: "Support",
          position: "right",
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Embeds',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Authentication',
      //         to: 'docs/doc2/',
      //       },
      //       {
      //         label: 'Guides',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Pricing',
      //         href: 'https://dev-v2.mimeeq.co.uk/pricing/',
      //       },
      //       {
      //         label: 'Features',
      //         href: 'https://dev-v2.mimeeq.co.uk/features/',
      //       },
      //       {
      //         label: 'Contact',
      //         href: 'https://dev-v2.mimeeq.co.uk/contact/',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Mimeeq. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/mimeeqsoftware/docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    ['@docusaurus/plugin-google-gtag',
      {
        id: 'gtag',
        trackingID: 'UA-134854471-2',
        anonymizeIP: true,
      }
    ],
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-KDGB3WP',
      }
    ],
    path.resolve(__dirname, 'src/plugins/webpack-plugin')
  ],
}
