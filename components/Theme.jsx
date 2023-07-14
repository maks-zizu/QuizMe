const React = require("react");

module.exports = function Theme({ theme }) {
  return (
    <div className="col s4 theme-container " data-id={theme.id}>
      <div className="card product pink lighten-4">
        <div className="card-image">
          <h1 className="card-title">{theme.theme}</h1>
        </div>
        <div className="card-action">
          <a href={`/themes/${theme.id}/question/0`}>Узнать подробнее</a>
        </div>
      </div>
    </div>
  );
};
