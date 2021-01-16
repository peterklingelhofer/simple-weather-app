const { Router } = require('express');
const { itemsRouter } = require('./items.js');

const apiRouter = Router();

apiRouter.use('/items', itemsRouter);

module.exports = {
  apiRouter,
};
