const Layout = require('./Layout');
const React = require('react');

module.exports = function MatchQuestion({ title }) {
  return (
    <div className="form row">
      <div className="s12 pink lighten-4 ">
        <form
          className="col s12 matchQuestion"
          action="/themes/matchQuestion"
          method="POST"
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                name="answer"
                id="answer"
                className="validate purple-text"
                placeholder="answer"
                required
              />
            </div>
            <button
              className="btn waves-effect waves-light purple lighten-3"
              type="submit"
            >
              Дать ответ
              <i className="material-icons right">send</i>
            </button>
          </div>
          <h2 className="errorAdd"></h2>
        </form>
      </div>
    </div>
  );
};
