module.exports = (router) => {
    // router.prefix('/v1')
    router.use('./taskRoutes.js', require('./taskRoutes'))
}