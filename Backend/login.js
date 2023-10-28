const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./userSchema');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email_id, password } = req.body;
    if (!email_id || !password) {
      return res.status(400).json({ error: 'incomplete Data' });
    }
    const userLogin = await User.findOne({ email_id });
    if (!userLogin)
      res
        .status(400)
        .json({ message: 'Invalid Email ID. Pls register before signing in' });
    const isMatched = await bcrypt.compare(password, userLogin.password);
    const token = await userLogin.generateAuthToken();
    res.cookie('jwtoken', token, {
      expires: new Date(Date.now() + 25892000000), 
      httpOnly: true,
    });

    if (isMatched) res.status(200).json({ message: 'Login Successful' });
    else
      res.status(403).json({ message: 'Access Denied : Invalid Credentials' });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;