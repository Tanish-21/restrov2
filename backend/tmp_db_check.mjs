import {Pool} from 'pg';
const pool = new Pool({
  user: 'postgres',
  password: 'tanish1436',
  host: 'localhost',
  port: 5432,
  database: 'restrov1'
});

try {
  const res = await pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name");
  console.log('tables:', res.rows.map(r => r.table_name).join(', '));

  const cols = await pool.query("SELECT column_name, data_type FROM information_schema.columns WHERE table_name='users' ORDER BY ordinal_position");
  console.log('users schema:', cols.rows);

  const sample = await pool.query('SELECT * FROM users LIMIT 1');
  console.log('users rows', sample.rows.length, 'sample row:', sample.rows[0]);
} catch (err) {
  console.error('db error:', err.message);
} finally {
  await pool.end();
}
