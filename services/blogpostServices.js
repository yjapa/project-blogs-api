const blogpostModels = require('../models/blogpostModels');
const categoryModels = require('../models/categoryModels');

const verifyCategoryIds = async ({ categoryIds }) => {
  const categoryExists = await Promise.all(categoryIds
      .map(async (categoryId) => categoryModels.getCategoryById(categoryId)));

      if (categoryExists.includes(null)) {
        const error = {
            code: 'badRequest',
            message: '"categoryIds" not found',
        };
        throw error;
    }
};

const createBlogPost = async ({ title, content }, userId) =>
  blogpostModels.createBlogPost({ title, userId, content });

module.exports = {
  verifyCategoryIds,
  createBlogPost,
};