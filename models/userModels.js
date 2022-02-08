const { User } = require('./sequelize/index');

const createUser = async (displayName, email, password, image) => {
    await User.create({ displayName, email, password, image });
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  createUser,
  findByEmail,
  getAllUsers,
};