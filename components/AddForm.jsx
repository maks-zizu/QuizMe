const Layout = require("./Layout");
const React = require("react");

module.exports = function MatchQuestion({ questionId }) {
  return (
    <div className="form row">
      <div className="s12 indigo darken-4 classDiv">
        <form
          className="col s12 matchQuestion"
          action="/themes/matchQuestion"
          method="POST"
          data-questionId={questionId}
        >
          <div className="input_container">
            <div className="input-field col myInp">
              <input
                name="answer"
                id="answer"
                className="validate purple-text input_field"
                placeholder="answer"
                required
              />
            </div>
            <button
              className="btn waves-effect waves-light black submit_btn"
              type="submit"
            >
              Дать ответ
              <i className="material-icons black right">send</i>
            </button>
          </div>
          <h2 className="errorAdd"></h2>
        </form>
      </div>
    </div>
  );
};
