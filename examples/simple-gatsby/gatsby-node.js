/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const wepackConfig = require("./webpack.config");

const onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig(wepackConfig);
};

//exports.createPages = createPages;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
