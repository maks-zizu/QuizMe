const router = require("express").Router();
const { log } = require("console");
const ThemeList = require("../components/ThemeList");
const QuestionL = require("../components/Question");
const { Theme, Question, User } = require("../db/models");

router.get("/", async (req, res) => {
  const theme = await Theme.findAll();
  res.renderComponent(ThemeList, { title: "это все карточки))", theme });
});

router.get("/:idTheme", async (req, res) => {
  const { idTheme } = req.params;
  const theme = await Question.findOne({ where: { themeId: idTheme } });
  res.renderComponent(QuestionL, { theme });
});

router.post('/matchQuestion', async (req, res) => {
  try {
    const {
      answer, action, method,
    } = req.body;
    if (answer) {
      const product = await Question.findOne({ where: { themeId: idTheme } });
      res.json({ html: res.renderComponent(QuestionL, { product }, { htmlOnly: true }) });
    } else {
      res.json({ message: 'Заполните поле' });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

module.exports = router;
