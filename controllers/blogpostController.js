const blogpostService = require('../services/blogpostServices');

const createBlogPost = async (req, res) => {
  const postData = req.body;
  const { id } = req.user;

  await blogpostService.verifyCategoryIds(postData);

  const post = await blogpostService.createBlogPost(postData, id);

  return res.status(201).json(post);
};

const getBlogPost = async (req, res) => {
  const posts = await blogpostService.getBlogPost();
  return res.status(200).json(posts);
};

module.exports = {
  createBlogPost,
  getBlogPost,
};
