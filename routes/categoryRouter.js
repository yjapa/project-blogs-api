const express = require('express');
const rescue = require('express-rescue');
const { createCategory, getAllCategories } = require('../controllers/categoryController');
const { auth } = require('../controllers/middlewares');

const category = express.Router();

category.use(auth);

category.post('/', rescue(createCategory));

category.get('/', rescue(getAllCategories));

module.exports = category;