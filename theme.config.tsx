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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Pearl-Service" />
      <meta property="og:description" content="Documentation center for products we provide" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Pearl-Service',
    }
  }
}

export default config
