import express from 'express';
import User from '../model/userModel.js';

const router = express.Router();

router.post ('/', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existUser = await User.findOne({email});

        if (existUser) {
            return res.status(400).json({message: "Email has been connected before"})
        }

        const user = await User.create({ name, email, password });
        await user.save();

        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.json({user});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

export default router;