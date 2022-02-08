const express = require('express');
const rescue = require('express-rescue');
const { createUser } = require('../controllers/userController');
const { userValidation } = require('../controllers/middlewares');

const user = express.Router();

user.post('/', userValidation, rescue(createUser));

module.exports = user;