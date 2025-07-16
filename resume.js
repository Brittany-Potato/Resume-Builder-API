const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    education: String,
    experience: String,
    skills: [String],
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Resume', ResumeSchema);