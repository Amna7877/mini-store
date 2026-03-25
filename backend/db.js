import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  password: '9227786163019952004',
  host: 'localhost',
  port: 5432,
  database: 'mini-store'
});

export default pool;