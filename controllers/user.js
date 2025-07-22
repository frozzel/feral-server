const User = require('../models/user'); // import User model

exports.create = async (req, res) => {
    console.log('Creating user:', req.body);
    try {
        const user = new User(req.body);
        await user.save();
        console.log('User created successfully:', user);
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).json({ message: 'Error creating user', error });
    }
};