const router = require("express").Router();
const Main = require("../components/Main");


router.get("/", (req, res) => {
  res.app.locals.user = "QUIZ";

  res.renderComponent(Main, { title: "mainpage" });
});

module.exports = router;
