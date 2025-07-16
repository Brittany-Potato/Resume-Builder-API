require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport =  require('passport');

const app = express();
app.use(express.json());
app.use(passport.initialize());

require('./config/passport')(passport);

mongoose.connect(process.env.MONGO_URI, {
    newUserUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err.message));

app.use('auth', require('./registrationRoute'));
app.use('./resume', require('./routes/resume'));

app.listen(3000, () => console.log('Server running on port 3000'));