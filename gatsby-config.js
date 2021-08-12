module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "chez-mman-qr-code",
  },
  plugins: [
    'gatsby-transformer-remark',
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets`,
        name: 'markdown-pages',
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
