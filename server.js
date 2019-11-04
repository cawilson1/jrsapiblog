const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('user', user)

app.post('/user', async (request, response) => {
    try {
        console.log("POST USER")
        var userInstance = new UserModel(request.body)
        console.log(userInstance)
        const created = await UserModel.create(userInstance)
        response.send(created)
    } catch (error) {
        response.status(500).send(error)
    }
})

app.get('/user', async (request,response) =>{
    try{
        console.log("GET USER")
        var userInstance =  await UserModel.find({username:'coolnewname'})
        console.log(userInstance)
        response.send(userInstance)

    } catch(error){
        response.status(500).send(error)
    }
})

app.get('/users', async (request,response) => {
    try{
        console.log("GET ALL USERS")
        var userInstances = await UserModel.find({})
        var userObject = {}
        userInstances.map(user=>{
            userObject[user.id] = user
        })
        console.log(userObject)
        response.send(userObject)
    } catch (error){
        response.status(500).send(error)
    }
})

app.put('/user/:username', async (request,response) =>{
    try{
        console.log("PUT USER")
        var userInstance = await UserModel.findOneAndUpdate({'username':request.params.username},request.body)
        console.log(userInstance)
        response.send(userInstance)
    }catch(error){
        response.status(500).send(error)
    }
})

app.delete('/user/:username', async (request, response) => {
    try{
        console.log('DELETE USER');
        var userInstance = await UserModel.deleteOne({'username': request.params.username})
        console.log(userInstance);
        response.send(userInstance)
    }catch(error){
        response.status(500).send(error)
    }
 })

const start = () => {
    return app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`)
    })
}

module.exports = { start }