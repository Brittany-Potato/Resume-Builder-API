const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('./user');

// POST /auth/register
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hash + salt the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create user with hashed password
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!'});
    } catch (err) {
        res.status(500).json({ error: 'Registration failed', details: err.message });
    }
});

router.get('/test', (req, res) => {
    res.send('Testing route is working!');
});

module.exports = router;