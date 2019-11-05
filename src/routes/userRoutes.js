const userRoutes = require('../controllers/userController')

const routes = (app) => {
    app.route('/users')
    .get(userRoutes.getAllUsers)

    app.route('/user')
    //.get()
    .post(userRoutes.postUser)

    app.route('/')
    .get(userRoutes.getIndexPage)

    app.route('/createUser')
    .get(userRoutes.createUserPage)
}

module.exports = { routes }