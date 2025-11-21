import { type DefaultTheme } from 'vitepress'
import { LocaleConfig } from '../.vitepress/types'

const configDeDE: LocaleConfig = {
  label: 'Deutsch',
  lang: 'de-DE',
  title: 'SkLibrary',
  description: 'Eine simple und mächtige Skript Bibliothek.',

  themeConfig: {
    nav: [
      { text: 'Startseite', link: '/de-DE' },
      { text: 'Dokumentation', link: '/de-DE/docs/get-started/introduction' }
    ],

    sidebar: {
      '/de-DE/': { base: '/de-DE/', items: sidebar() }
    },

    editLink: {
      pattern: 'https://github.com/SkriptLibrary/SkLibraryWebsite/edit/dev/src/:path',
      text: 'Auf Github bearbeiten'
    },

    ...translations()
  }
}

function translations() {
  return {
    notFound: {
      title: 'SEITE NICHT GEFUNDEN',
      quote: '',
      linkLabel: 'Nach hause',
      linkText: 'Nach hause'
    },

    sidebarMenuLabel: 'Menu',
    outline: {
      label: 'Auf dieser Seite'
    },

    lastUpdated: {
      text: 'Zuletzt geändert am'
    },
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },

    langMenuLabel: 'Sprache ändern'
  }
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Einstieg',
      collapsed: false,
      items: [
        {
          text: 'Einführung',
          link: '/docs/get-started/introduction',
        },
        {
          text: 'Installation',
          link: '/docs/get-started/installation',
        },
        {
          text: 'Befehle',
          link: '/docs/get-started/commands',
        },
        {
          text: 'Einstellungen',
          link: '/docs/get-started/configuration',
        }
      ],
    },
    {
      text: 'Module',
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

function searchOptionsDeDE(): Partial<DefaultTheme.LocalSearchOptions> {
  return {
    translations: {
      button: {
        buttonText: 'Suchen',
        buttonAriaLabel: 'Suchen'
      },
      modal: {
        displayDetails: 'Detaillierte list anzeigen',
        resetButtonTitle: 'Suche zurücksetzten',
        backButtonTitle: 'Suche schließen',
        noResultsText: 'Keine Ergebnisse gefunden für',
        footer: {
          selectText: 'zum auswählen',
          selectKeyAriaLabel: 'auswählen',
          navigateText: 'zum navigieren',
          navigateDownKeyAriaLabel: 'Pfeil-Runter-Knopf',
          navigateUpKeyAriaLabel: 'Pfeil-Hoch-Knopf',
          closeText: 'zum schließen',
          closeKeyAriaLabel: 'schließen'
        }
      }
    }
  }
}

export { configDeDE, searchOptionsDeDE }