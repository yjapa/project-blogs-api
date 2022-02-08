const express = require('express');
const rescue = require('express-rescue');
const { login } = require('../controllers/userController');
const { loginValidation } = require('../controllers/middlewares');

const user = express.Router();

user.post('/', loginValidation, rescue(login));

module.exports = user;