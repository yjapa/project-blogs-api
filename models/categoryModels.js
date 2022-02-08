const { Category } = require('./sequelize/index');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  console.log(category);
  return category;
};

module.exports = {
  createCategory,
};