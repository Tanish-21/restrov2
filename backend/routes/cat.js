import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Query distinct categories from items table
        const result = await pool.query('SELECT DISTINCT category FROM items WHERE category IS NOT NULL');
        
        // Map to format containing only id and name
        const categories = result.rows.map((row) => {
            const name = row.category;
            return {
                id: name.toLowerCase(),
                name: name
            };
        });

        res.status(200).json(categories);
    } catch (err) {
        console.error('Database error fetching categories:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
