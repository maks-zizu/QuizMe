const React = require("react");

module.exports = function Navbar({ user }) {
  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-4">
        <a href="/" className="brand-logo">
          QUIZ
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/themes">Темы</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
