import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.on('connect', () => {
    console.log('Database connect sucessful');
});

pool.on('error', (err) => {
    console.error("database error",err)
});

export default pool;
