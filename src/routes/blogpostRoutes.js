const blogpostRoutes = require('../controllers/blogpostController')

const routes = (app) => {
    app.route('/blogpost')
    .post(blogpostRoutes.postBlogpost)
    .get(blogpostRoutes.getUserBlogposts)
}

module.exports = { routes }