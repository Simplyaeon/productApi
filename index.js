import express from 'express';
import productRoutes from './routes/productRoutes.js'
import pool from './config/db.js'

const app = express()

app.use(express.json())

PORT = 8090



app.use('/', productRoutes)

app.listen(PORT, async()=>{
    try {
        const connection = await pool.getConnection()
        connection.release()
        console.log('Database connection established 👍');
        console.log(`Server is listening on ${PORT}`)
    } catch (error) {
        condole.log(`❌Failed to connect to database${error.message}`)
        condole.log('❌Server is running without database')
    }
})