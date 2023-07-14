const router = require("express").Router();
const { log } = require("console");
const ThemeList = require("../components/ThemeList");
const QuestionL = require("../components/Question");
const { Theme, Question, User } = require("../db/models");

router.get("/", async (req, res) => {
  const theme = await Theme.findAll();
  res.renderComponent(ThemeList, { title: "это все карточки))", theme });
});

router.get("/:idTheme/question/:indexQuestion", async (req, res) => {
  const { idTheme, indexQuestion } = req.params;
  const questions = await Question.findAll({ where: { themeId: idTheme } });
  let index = indexQuestion;
  if (index < questions.length) {
    index++;
    res.renderComponent(QuestionL, { question: questions[indexQuestion], index });
  }

  // res.renderComponent(QuestionL, { question: questions[indexQuestion],  });
});

router.post("/matchQuestion", async (req, res) => {
  try {
    const { answer, id } = req.body;
    if (answer) {
      const question = await Question.findOne({ where: { id } });
      if (answer.toLowerCase() === question.answer.toLowerCase()) {
        res.json({
          message: "Правильно!",
        });
      } else {
        res.json({
          message: `Ответ неверный, правильный ответ: ${question.answer}`,
        });
      }
    } else {
      res.json({ message: "Заполните поле" });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

module.exports = router;
