import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

pool.on('connect', () => {
    console.log('Database connect sucessful');
});

pool.on('error', (err) => {
    console.error("database error",err)
});

export default pool;