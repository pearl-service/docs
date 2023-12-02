import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Pearl-Service Docs</span>,
  chat: {
    link: 'https://discord.gg/pearlservice',
  },
  footer: {
    text: 'Pearl-Service.best - 2023',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Pearl-Service',
    }
  }
}

export default config
