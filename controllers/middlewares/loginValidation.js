const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  } 

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
    next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  } 

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  next();
};

const loginValidation = [validateEmail, validatePassword];

module.exports = loginValidation;