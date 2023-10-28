const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// The following code sets the schema for the vaious fields that are required from the end user while registering and the type of each of this fieldd.

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
  },
  college_name: {
    type: String,
    default: 'Delhi Technological University',
  },
  password: {
    type: String,
    required: true,
  },
  blacklisted: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  wishlist: [String],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  list: [
    {
      item_name: {
        type: String,
      },
      item_price: {
        type: Number,
      },
      item_age: {
        type: Number,
      },
      item_condition: {
        type: Number,
      },
      item_image: {
        type: String,
      },
      item_tag: {
        type: String,
        enum: [
          'Others',
          'Clothing_essentials',
          'Books',
          'Daily-use',
          'Sports',
          'Stationary',
        ],
      },
      item_description: {
        type: String,
      },
      item_status: {
        type: String,
        enum: ['under_approval', 'approved', 'deleted', 'blacklisted'],
      },
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  try {
    const token_ = jwt.sign({ _id: this._id }, `${process.env.JWT_KEY}`);
    this.tokens = this.tokens.concat({ token: token_ });
    await this.save();
    return token_;
  } catch (err) {
    console.log(err);
  }
};
const User = mongoose.model('Main_Collection', userSchema);
module.exports = User;
