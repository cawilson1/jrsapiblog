const mongoose = require('mongoose')
const blogpostSchema = require('../models/blogpostModel')
const path = require('path')
const BlogpostModel = mongoose.model('blogpost', blogpostSchema.blogpost)

const postBlogpost = async (request, response) => {
    try {
        console.log("POST BLOGPOST")
        var blogpostInstance = new BlogpostModel(request.body)
        console.log(blogpostInstance)
        const created = await BlogpostModel.create(blogpostInstance)
        response.send(created)
    } catch (error) {
        response.status(500).send(error)
    }
}

//get a given user's blogposts
const getUserBlogposts = async (request,response) =>{
    try{

        console.log("GET USERS BLOGPOSTS")
        var blogpostInstance = await BlogpostModel.find(request.query)
        console.log(blogpostInstance)
        response.send(blogpostInstance)

    } catch(error){
        response.status(500).send(error)
    }
}

module.exports = { getUserBlogposts, postBlogpost }