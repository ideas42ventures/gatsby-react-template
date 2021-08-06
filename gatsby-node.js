const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  // adding this type def allows the open positions file to contain an empty array without erroring
  // https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#fixing-field-types
  const typeDefs = `
    type openPositionsJson implements Node {
      url: String,
      title: String,
      type: String,
      location: String
    }
  `;
  createTypes(typeDefs);
};
