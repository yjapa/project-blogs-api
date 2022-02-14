const { Category } = require('./sequelize/index');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategoryById = (id) => Category.findByPk(id);

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
};