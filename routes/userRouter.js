const express = require('express');
const rescue = require('express-rescue');
const { createUser, getAllUsers } = require('../controllers/userController');
const { userValidation, auth } = require('../controllers/middlewares');

const user = express.Router();

user.post('/', userValidation, rescue(createUser));

user.use(auth);

user.get('/', rescue(getAllUsers));

module.exports = user;