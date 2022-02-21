module.exports = {
  siteMetadata: {
    title: `backbenchers`,
    siteUrl: `https://gobackbenchers.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Backbenchers`,
        short_name: `Backbenchers`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        lang: `en`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
