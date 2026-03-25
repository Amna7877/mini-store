import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  password: 'afsah123',
  host: 'localhost',
  port: 5432,
  database: 'ministore'
});

export default pool;