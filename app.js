require('@babel/register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const morgan = require('morgan');
const { sequelize } = require('./db/models');

const app = express();
const PORT = 3005;

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection BD has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
