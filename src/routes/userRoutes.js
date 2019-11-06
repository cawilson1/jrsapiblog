const userRoutes = require('../controllers/userController')

const routes = (app) => {
    app.route('/users')
    .get(userRoutes.getAllUsers)

    app.route('/user')
    .get(userRoutes.getUser)
    .post(userRoutes.postUser)
    .delete(userRoutes.deleteUser)
    .put(userRoutes.putUser)
}

module.exports = { routes }