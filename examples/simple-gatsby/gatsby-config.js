require("dotenv-flow").config();
const pkg = require("./package");

const gaTrackingId = "";
const siteUrlBase = `${process.env.SITE_BASE_URL}`;

console.log("SITE_BASE_URL", process.env.SITE_BASE_URL);

module.exports = {
  siteMetadata: {
    title: `Nitrogen Web`,
    description: `Nitrogen Web`,
    author: `@nitrogen`,
    siteUrl: `${siteUrlBase}${
            process.env.NODE_ENV === "production"
                ? process.env.GATSBY_PATH_PREFIX
                : ""
        }`,
  },

  pathPrefix: process.env.GATSBY_PATH_PREFIX || "",

  plugins: [
    `gatsby-plugin-react-helmet`,

    //
    // Progressive Web App
    //
    // Ensure that the *manifest* plugin is listed before the *offline* plugin
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: pkg.name,
        short_name: pkg.name,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `static/img/icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",

    //
    // Google Analytics
    //
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: gaTrackingId,
        name: "",
        // Defines where to place the tracking(GA) script
        // - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/under-construction/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "auto",
      },
    },
  ],
};
