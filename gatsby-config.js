var siteUrl = `https://vaimetravel.com`;

if (process.env.NODE_ENV === "development") {
  siteUrl = "localhost:8000";
} else if (process.env.SITE_URL) {
  siteUrl = process.env.SITE_URL;
}

module.exports = {
  siteMetadata: {
    title: "Vaime Travel",
    description: "Ecommerce",
    siteUrl,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-layout",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === "development",
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Vaime Travel',
        short_name: 'Vaime Travel',
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#DE261D`,
        display: `standalone`,
        lang: "pl-PL",
        icon: "./static/img/vaime_circle.png",
        orientation: 'portrait',
        legacy: false,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-168279785-1",
        pageTransitionDelay: 100,
        defer: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
