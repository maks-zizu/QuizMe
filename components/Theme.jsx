const React = require("react");

module.exports = function Theme({ theme }) {
  return (
    <div className="mainContainer" data-id={theme.id}>
      <div className="indigo darken-4 theme-container">
        <div className="card-image">
          <h1 className=" indigo darken-4 theme-title">{theme.theme}</h1>
        </div>
        <div className="card-action">
          <a href={`/themes/${theme.id}/question/0`} className="nextQuest">
            Перейти к вопросам 👉
          </a>
        </div>
      </div>
    </div>
  );
};
