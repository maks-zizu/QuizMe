const React = require("react");
const Layout = require("./Layout");

module.exports = function ProductPage({ theme }) {
  return (
    <Layout>
      <div className="col s12  pink lighten-4">
        <div className="card">
          <div className="card-image">
            <span className="card-title">{theme.id}</span>
          </div>
          <div className="card-content">
            <span className="card-title"> Вопрос: {theme.score}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
