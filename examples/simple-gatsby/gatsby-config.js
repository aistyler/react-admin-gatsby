const pkg = require("./package");

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
  ],
  siteMetadata: {
    title: `${pkg.name}`,
    description: `${pkg.description}`,
  },
};
