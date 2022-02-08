const express = require('express');
const rescue = require('express-rescue');
const { createCategory } = require('../controllers/categoryController');
const { auth } = require('../controllers/middlewares');

const category = express.Router();

category.use(auth);

category.post('/', rescue(createCategory));

module.exports = category;