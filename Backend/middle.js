const jwt = require('jsonwebtoken');
const User = require('./userSchema');

// The jwt_Authenticate function is a middleware that authenticates requests using JSON Web Tokens (JWT)
const jwt_Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.JWT_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      'tokens.token': token,
    });
    if (!rootUser) {
      throw new Error('User not found');
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(400).send('Unauthorised:_NO_token_provided');
  }
};

module.exports = jwt_Authenticate;
