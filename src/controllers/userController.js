const mongoose = require('mongoose')
const userSchema = require('../models/userModel')
const path = require('path')

const UserModel = mongoose.model('user', userSchema)
/*
const postUser = async (request, response) => {
    try {
        console.log("POST USER")
        var userInstance = new UserModel(request.body)
        console.log(userInstance)
        const created = await UserModel.create(userInstance)
        response.send(created)
    } catch (error) {
        response.status(500).send(error)
    }
}

async (request,response) =>{
    try{

        console.log("GET REQUEST")
        var userInstance = await UserModel.find(request.query)
        console.log(userInstance)
        response.send(userInstance)

    } catch(error){
        response.status(500).send(error)
    }
}
*/

const getAllUsers = async (request,response) => {
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
}
/*
async(request,response)=>{
    try{
        console.log("SEND HTML")
        response.sendFile(path.join(__dirname + '/index.html'))
    } catch(error){
        response.status(500).send(error)
    }
}

async (request,response) =>{
    try{
        console.log("PUT USER")
        var userInstance = await UserModel.findOneAndUpdate({'username':request.params.username},request.body)
        console.log(userInstance)
        response.send(userInstance)
    }catch(error){
        response.status(500).send(error)
    }
}

async (request, response) => {
    try{
        console.log('DELETE USER');
        var userInstance = await UserModel.deleteOne({'username': request.params.username})
        console.log(userInstance);
        response.send(userInstance)
    }catch(error){
        response.status(500).send(error)
    }
 }
*/
module.exports = { getAllUsers }