const jwt = require('jsonwebtoken');
const userModels = require('../models/userModels');

const { JWT_SECRET } = process.env;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (displayName, email, password, image) => {
  const checkEmail = await userModels.findByEmail(email);

  if (checkEmail) {
    const error = {
        code: 'registeredUser',
        message: 'User already registered',
    };
    throw error;
}

  await userModels.createUser(displayName, email, password, image);

  const payload = {
    displayName,
    email,
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};

const login = async (email, password) => {
  const user = await userModels.findByEmail(email);

  if (!user || user.password !== password) { 
    const error = {
      code: 'wrongFields',
      message: 'Invalid fields',
    };
    throw error;
  }

  const payload = {
    email,
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};

module.exports = {
  createUser,
  login,
};