const React = require("react");
const Layout = require("./Layout");
const AddForm = require("./AddForm");

module.exports = function ProductPage({ question, index }) {
  return (
    <Layout>
      <div className="col s12 lighten-4 qqq" data-id={question.id} data-index={index}>
        <div className="q indigo darken-4" >

          <div className="q-content ">
            <span className="q-title">Вопрос: {question.question}</span>
          </div>
        </div>
        <a href={`/themes/${question.themeId}/question/${index}`}><button className="q-button">Следующий вопрос</button></a>
      </div>
      <AddForm questionId={question.id} />
    </Layout>
  );
};
