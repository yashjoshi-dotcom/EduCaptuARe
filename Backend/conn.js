const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB)
  .then(() => console.log('Connection is successful'))
  .catch((err) => console.log(err));