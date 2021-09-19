module.exports = {
  siteMetadata: {
    siteUrl: 'https://chez-mman-site-mobile.netlify.app/',
    title: `Chez M'man`,
    language: 'fr',
    description: `La carte de restaurant Chez M'man, 4 rue des Marronniers, Lyon 69002`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chez M'man, la carte`,
        short_name: `Chez M'man`,
        start_url: `/`,
        icon: `src/images/icon.svg`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets`,
        name: 'markdown-pages'
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
