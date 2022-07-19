module.exports = {
  siteMetadata: {
    title: `gatsby portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components"]
};

require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
        icon: 'src/images/faviconIcon.png',
      },
    },
  ],
}