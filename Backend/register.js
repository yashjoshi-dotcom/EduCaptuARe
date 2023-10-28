const express = require('express');
const User = require('./userSchema');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email_id, college_name, password } = req.body;
  if (!name || !email_id || !password) {
    return res.status(409).json({
      error: 'Bad Request: Please enter all the required data.',
    });
  }
 
  try {
    const userLogin = await User.findOne({ email_id });
    if (userLogin)
      return res.status(403).json({
        error: '{Forbidden to create multiple accounts} Email already exists',
      });

    const user = new User({ name, email_id, college_name, password });
    await user.save();
    res.status(201).json({ message: 'Registered sucessfully' });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: 'We are experiencing some server problems!!' });
  }
});

module.exports = router;