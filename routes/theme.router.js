const router = require("express").Router();
const { log } = require("console");
const ThemeList = require("../components/ThemeList");
const { Theme, Question, User } = require("../db/models");

router.get("/", async (req, res) => {
  const theme = await Theme.findAll();
  res.renderComponent(ThemeList, { title: "это все карточки))", theme });
});

router.get("/:idTheme", async (req, res) => {
  const { idTheme } = req.params;
  const theme = await User.findOne({ where: { id: idTheme } });
  console.log(theme);
  res.renderComponent(Question, { theme });
});

module.exports = router;
