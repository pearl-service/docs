// next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const withImages = require('next-images');

module.exports = withNextra(withImages({
  images: {
    unoptimized: true, 
  },
}));