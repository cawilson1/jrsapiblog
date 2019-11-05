const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./src/routes/userRoutes')
const cors = require('cors')

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb+srv://user2:secretwow@cluster0-4nkhd.mongodb.net/todos?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

routes.routes(app)

const start = () => {
    return app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`)
    })
}

module.exports = { start }