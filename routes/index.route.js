const router = require("express").Router();
// const questionsRouter = require("");
const themeRouter = require("./theme.router");
const mainRouter = require("./main.route");

// router.use("/questions", questionsRouter);
router.use("/", mainRouter);
router.use("/themes", themeRouter);

module.exports = router;
