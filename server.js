require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err.message));

app.use('/auth', require('./registrationRoute'));
app.use('/resume', require('./resume'));

app.listen(4000, () => console.log('Server running on port 4000'));