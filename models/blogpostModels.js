const { BlogPost, User, Category, PostCategory } = require('./sequelize/index');

const createBlogPost = async ({ title, userId, content }) => {
  const date = new Date();

  const post = await BlogPost.create({
      title,
      userId,
      content,
      published: date,
      updated: date,
  });

  return {
      id: post.id,
      userId,
      title,
      content,
  };
};

const postsCategories = async (postId, categoryId) => {
    PostCategory.create({ postId, categoryId });
};

const getBlogPost = async () => {
  const posts = await BlogPost.findAll({
      include: [{
          model: User,
          as: 'user',
          attributes: {
              exclude: 'password',
          },
      }, {
          model: Category,
          as: 'categories',
          through: {
              attributes: [],
          },
      }],
  });
  return posts;
};

module.exports = {
  createBlogPost,
  getBlogPost,
  postsCategories,
 };