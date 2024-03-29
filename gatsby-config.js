module.exports = {
  siteMetadata: {
    title: `zinetrip`,
    siteUrl: `https://zinetrip.site`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zinetrip`,
        short_name: `zinetrip`,
        start_url: `/`,
        background_color: `#ff33cc`,
        theme_color: `#ff33cc`,
        display: `minimal-ui`,
        icon: `static/assets/Trip---paginas.png`,
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-xxx",
        head: true,
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-netlify-cms`,
  ],
}
