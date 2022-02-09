const categoryModels = require('../models/categoryModels');

const createCategory = async (name) => {
  const category = await categoryModels.createCategory(name);

  if (!name) { 
    const error = {
      code: 'wrongFields',
      message: '"name" is required',
    };
    throw error;
  }

  return category;
};

const getAllCategories = async () => categoryModels.getAllCategories();

module.exports = {
  createCategory,
  getAllCategories,
};