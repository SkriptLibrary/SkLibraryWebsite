import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export type LocaleConfig = LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string
  link?: string
}