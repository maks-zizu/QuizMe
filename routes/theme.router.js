const router = require("express").Router();
const ThemeList = require("../components/ThemeList");
const { Theme } = require("../db/models");

router.get("/", async (req, res) => {
  const theme = await Theme.findAll();
  res.renderComponent(ThemeList, { title: "это все карточки))", theme });
});

module.exports = router;
