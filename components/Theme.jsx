const React = require("react");

module.exports = function Theme({ theme }) {
  return (
    <div className="mainContainer" data-id={theme.id}>
      <div className="theme-container">
        <div className="card-image">
          <h1 className="theme-title">{theme.theme}</h1>
        </div>
        <div className="card-action">
          <a href={`/themes/${theme.id}`} className="nextQuest">
            Перейти к вопросам 👉
          </a>
        </div>
      </div>
    </div>
  );
};
