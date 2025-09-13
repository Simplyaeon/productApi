import 'dotenv/config'
import sql from 'mysql2/promise'

const pool = sql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

export default pool;