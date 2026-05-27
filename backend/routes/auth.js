import express from 'express';
import pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import verify from '../middleware/authmiddleware.js';
dotenv.config();

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    console.log('Login attempt:', email);
    try{
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        const user = result.rows[0];

        if (!user) {
            return res.status(401).json({ message: 'User not Found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign(
                {
                    email:email
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1d'
                }
            )
            

        res.status(200).json({ message: 'Login successful', success: true, token: token , user: user.username});
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ message: 'Internal server error' }); 
    }    
});


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email and password are required' });
    }
    try{
        const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        const exuser = existingUser.rows[0];
        
        if (exuser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const result = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );

        res.status(201).json({ message: 'User registered successfully', success: true });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;