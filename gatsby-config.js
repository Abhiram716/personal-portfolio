/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Abhiram Kantipudi | Full stack developer`,
    description: `Portfolio website of Abhiram Kantipudi`,
    author: `Abhiram Kantipudi <a4abhiram125@gmail.com>`,
    siteUrl: `https://abhiram716.github.io/personal-portfolio/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Poppins",
            file: "https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap",
          },
          {
            name: "Kurale",
            file: "https://fonts.googleapis.com/css2?family=Kurale&display=swap",
          },
        ],
      },
    },
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `About Projects`,
        path: `${__dirname}/src/data/projects`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Abhiram Kantipudi | Full stack developer`,
        short_name: `Abhi`,
        background_color: `#030712`,
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
