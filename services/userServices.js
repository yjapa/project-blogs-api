const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const checkEmailUser = async (email) => User.findOne({ where: { email } });

const createUser = async (displayName, email, password, image) => {
  const checkEmail = await checkEmailUser(email);

  if (checkEmail) {
    const error = {
        code: 'registeredUser',
        message: 'User already registered',
    };
    throw error;
}

  await User.create({ displayName, email, password, image });

  const payload = {
    displayName,
    email,
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};

module.exports = {
  createUser,
};