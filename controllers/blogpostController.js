const blogpostService = require('../services/blogpostServices');

const createBlogPost = async (req, res) => {
  const postData = req.body;
  const { id } = req.user;
  // console.log(postData.categoryIds);

  await blogpostService.verifyCategoryIds(postData);

  const post = await blogpostService.createBlogPost(postData, id);

  return res.status(201).json(post);
};

module.exports = {
  createBlogPost,
};
