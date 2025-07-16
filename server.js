require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport =  require('passport');
require('.config/passport')(passport);

const app = express();
app.use(express.json());
app.use(passport.initialize());

mongoose.connect(process.env.MONGO_URI);

app.use('auth', require('./routes/auth'));
app.use('./resume', require('./routes/resume'));

app.listen(3000, () => console.log('Server running on port 3000'));