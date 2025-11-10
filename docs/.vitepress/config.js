export default {
  base: '/SkWebsite/',
  title: 'SkLibrary',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: `https://raw.githubusercontent.com/SkriptLibrary/SkWebsite/e68cb2abc761caa52a9a9b35202e84019dde04c1/docs/assets/logo.png` }]
  ],
  description: 'Documentation for SkLibrary',
  themeConfig: {
    logo: `assets/logo.png`,
    nav: [
      { text: 'Homepage', link: '/' },
      { text: 'Guide', link: '/pages/introduction/' },
      { text: 'Download', link: '/install/' }
    ],
    sidebar: {
      '/pages/': [
        {
          text: 'DOWNLOAD',
          items: [
            { text: 'Installation', link: '/pages/introduction/index.md' },
            { text: 'Modules & Addons', link: '/pages/introduction/addonsAndModules.md' }
          ]
        },
        {
          text: 'MODULES',
          items: [
            { text: 'skProtect - Spawn Protection', link: '/pages/modules/skProtect' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SkriptLibrary/sklibrary' },
      { icon: 'discord', link: '/404/' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/SkriptLibrary/sklibrary/blob/main/LICENSE">MIT License</a>.',
      copyright: '© 2025 SkLibrary | A <b>free & open-source</b> product'
    }
  },
  enhanceApp({ app }) {
    app.component('DownloadApp', DownloadApp)
  }
}
