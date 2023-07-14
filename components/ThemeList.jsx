const Layout = require("./Layout");
const React = require("react");
const Theme = require("./Theme");
// const AddForm = require("./AddForm");

module.exports = function ProductsList({ title, theme }) {
  return (
    <Layout title={title}>
      <div className="row  themeList">
        {theme.map((theme) => (
          <Theme theme={theme} key={theme.id} />
        ))}
      </div>
    </Layout>
  );
};
