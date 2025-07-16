const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String, // Hash this
});
module.exports = mongoose.model('User', UserSchema);