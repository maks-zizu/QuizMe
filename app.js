require("@babel/register");
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const morgan = require("morgan");
const { sequelize } = require("./db/models");
const ssr = require("./middleware/renderComponent");

const app = express();
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(ssr);
app.use(express.urlencoded({ extended: true })); // читать данные из тела запросов
app.use(express.json());
const PORT = 3005;

const indexRoute = require("./routes/index.route");

app.use("/", indexRoute);

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Connection BD has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
