const express = require('express')
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRouters')


const app = express()
dotEnv.config()
app.use(bodyParser.json())

const port = process.env.PORT || 3004

mongoose.connect(process.env.MONGO_URI, { dbName: 'sample_task_db' })
    .then(() => console.log('Connected successfully'))
    .catch((error) => console.log('error', error))

app.use('/books', bookRoutes)

app.listen(port, () => console.log(`Listening on port ${port}`))
