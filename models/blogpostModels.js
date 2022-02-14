const { BlogPost } = require('./sequelize/index');

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

module.exports = {
  createBlogPost,
 };