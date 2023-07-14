const Layout = require("./Layout");
const React = require("react");

module.exports = function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="main">
        <a href="/themes">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/206/208/original/quiz-time-neon-signs-style-text-free-vector.jpg"
            className="mainimg"
          />
        </a>
      </div>
    </Layout>
  );
};
