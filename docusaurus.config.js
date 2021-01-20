module.exports = {
  title: 'The Mint Farm',
  tagline: 'Various documents for The Mint Farm',
  url: 'https://support.themintfarm.ml',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'themintfarm', // Usually your GitHub org/user name.
  projectName: 'support', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'The Mint Farm',
      logo: {
        alt: 'The Mint Farm Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/welcome',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://devel.themintfarm.ml/themintfarm',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Welcome',
              to: 'docs/welcome',
            },
            {
              label: 'Support',
              to: 'docs/support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitLab',
              href: 'https://devel.themintfarm.ml/themintfarm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Mint Farm. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
          docs: {
              sidebarPath: require.resolve('./sidebars.js'),
          },
      },
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
