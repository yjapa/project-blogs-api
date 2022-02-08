const jwt = require('jsonwebtoken');
const userModels = require('../../models/userModels');

const { JWT_SECRET } = process.env;

const jwtConfig = { algorithm: 'HS256' };

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { email } = jwt.verify(token, JWT_SECRET, jwtConfig);
    const user = await userModels.findByEmail(email);

    req.user = user;
    return next();
} catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
}
};