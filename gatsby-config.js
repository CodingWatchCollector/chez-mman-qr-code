module.exports = {
  siteMetadata: {
    siteUrl: 'https://chez-mman-site-mobile.netlify.app/',
    title: `Chez M'man`,
    language: 'fr',
    description: `La carte de restaurant Chez M'man, 4 rue des Marronniers, Lyon 69002`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/icons/icon.svg`
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    }
  ]
}
