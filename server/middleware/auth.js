const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  console.log(req.body);
  try {
    const token = req.headers["x-access-token"];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      res.locals.userId = userId;
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};