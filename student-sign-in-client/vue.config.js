module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}
// Will proxy requests from Vue app (8080) to Express server (3000)