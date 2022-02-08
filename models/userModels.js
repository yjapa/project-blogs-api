const { User } = require('./sequelize/index');

const createUser = async (displayName, email, password, image) => {
    await User.create({ displayName, email, password, image });
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  createUser,
  findByEmail,
};