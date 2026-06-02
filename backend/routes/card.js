import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

router.get('/cards', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM items');

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No items found' });
        }

        res.status(200).json({ status: 'success', data: result.rows });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/trending', async (req,res) => {
    try {
        const result = await pool.query('SELECT * FROM items WHERE trending = true ORDER BY rating DESC LIMIT 10');
        
        if (result.rows.length === 0) {
            const fallbackResult = await pool.query('SELECT * FROM items ORDER BY rating DESC LIMIT 10');
            return res.status(200).json({ status: 'success', data: fallbackResult.rows });
        }
        return res.status(200).json({ status: 'success', data: result.rows });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;