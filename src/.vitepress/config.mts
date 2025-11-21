import { defineConfig, type DefaultTheme } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'
import { configDeDE, searchOptionsDeDE } from "../de-DE/config.ts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SkLibrary",
  description: "A simple and powerful Skript library.",
  lang: 'en-us',
  
  
  head: [
    ['link', { rel: 'icon', href: '/assets/logo.svg'}],
    ['meta', { name: 'theme-color', content: '#1cc91fff'}],
    ['meta', { property: 'og:type', content: 'website'}],
    ['meta', { property: 'og:site_name', content: 'SkLibrary - Docs'}],
    ['meta', { property: 'og:url', content: 'https://sklibrary.de'}],
  ],
  
  cleanUrls: true,
  rewrites: {
    'en-US/:rest*': ':rest*'
  },
  
  lastUpdated: true,
  
  locales: {
    root: {
      label: 'English',
    },
    'de-DE': configDeDE
  },
  
  appearance: 'force-dark',
  
  themeConfig: {
    i18nRouting: true,
    logo: '/public/assets/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/introduction' }
    ],

    sidebar: sidebar(),
    
    socialLinks: [
      { icon: 'discord', link: 'https://dc.sklibrary.de' },
      {
        icon: 'github',
        link: 'https://github.com/SkriptLibrary/SkLibrary'
      }
    ],
    
    editLink: {
      pattern: 'https://github.com/SkriptLibrary/SkLibraryWebsite/edit/dev/src/:path',
      text: 'Edit this page on Github'
    },
    
    search: {
      provider: 'local',
      options: {
        locales: {
          'de-DE': searchOptionsDeDE(),
        }
      }
    }
  },
  markdown: {
    async config(md) {
      // WORKAROUND: Localization for code block's copy feature: https://github.com/vuejs/vitepress/issues/4431
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'de-DE':
              return 'Code kopieren'
            default:
              return 'Copy code'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          skript: localIconLoader(
            import.meta.url,
            '../public/assets/skript_logo.svg'
          ),
          sk: localIconLoader(import.meta.url, '../public/assets/skript_logo.svg')
        }
      })
    ]
  }
})


function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      link: '/docs/introduction',
    },
    {
      text: 'Installation',
      link: '/docs/installation',
    },
    {
      text: 'Commands',
      link: '/docs/commands',
    },
    {
      text: 'Configuration',
      link: '/docs/configuration',
    },
    {
      text: 'Standalone',
      link: '/docs/standalone',
    },
    {
      text: 'Dependencies',
      link: '/docs/dependencies',
    },
    {
      text: 'Registries',
      link: '/docs/registries',
    },
    {
      text: 'Modules',
      collapsed: false,
      items: [
        {
          text: 'Fly',
          link: '/docs/modules/fly',
        },
        {
          text: 'Vanish',
          link: '/docs/modules/vanish',
        }
      ]
    }
  ]
}