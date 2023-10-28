// Importing required libraries
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// Initiating Connection to the MongoDB
require('./conn');

// Importing all routes
// const all_listings = require('./src/routes/all_listings');
const register = require('./register');
const base = require('./base');
const login = require('./login');


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use('/', base);
app.use('/register',register);
app.use('/login',login);
module.exports = app;