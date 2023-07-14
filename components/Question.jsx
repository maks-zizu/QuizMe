const React = require("react");
const Layout = require("./Layout");
const AddForm = require("./AddForm");

module.exports = function ProductPage({ question, index }) {
  return (
    <Layout>
      <div className="col s12 lighten-4 qqq">
        <div className="q">
          <div className="q-image">
            <span className="q-title">Тема: {question.themeId}</span>
          </div>
          <div className="q-content">
            <span className="q-title">Вопрос: {question.question}</span>
          </div>
        </div>
        <button className="q-button">Следующий вопрос</button>
      </div>
      <AddForm questionId={question.id} />
    </Layout>
  );
};
