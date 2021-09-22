module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.beresforddesign.net',
    title: 'UNDER CONSTRUCTION',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beresford Design`,
        short_name: `Beresford Design`,
        start_url: `/`,
        background_color: `#f1f6f9`,
        theme_color: `#ff9e9e`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
