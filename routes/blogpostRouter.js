const express = require('express');
const rescue = require('express-rescue');
const { createBlogPost } = require('../controllers/blogpostController');
const { blogpostValidation, auth } = require('../controllers/middlewares');

const blogpost = express.Router();

blogpost.use(auth);

blogpost.post('/', blogpostValidation, rescue(createBlogPost));

module.exports = blogpost;