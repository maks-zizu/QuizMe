const Layout = require("./Layout");
const React = require("react");

module.exports = function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="main">
        <img src="https://oborot.ru/wp-content/uploads/2022/06/avito-1024x683.jpg" />
      </div>
    </Layout>
  );
};
