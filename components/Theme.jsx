const React = require("react");

module.exports = function Theme({ theme }) {
  return (
    <div className="col s4 productOne " data-id={theme.id}>
      <div className="card product pink lighten-4">
        <div className="card-image">
          <h1 className="card-title">{theme.theme}</h1>
        </div>
        <div className="card-action">
          <a href={`/products/${theme.id}`}>Узнать подробнее</a>
        </div>
      </div>
    </div>
  );
};
