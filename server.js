// Import Express library
let express = require('express')

// Import Router object with API request routes
let api_routes = require('./routes/api.js')

let path = require('path')

// Initialize express object
let app = express()

// Path to dist folder with production build of student sign in client
let vueClientPath = path.join(__dirname, 'student-sign-in-client', 'dist')
// Server will use production build
app.use(express.static(vueClientPath))

// express.json(): Express method, allows server to parse incoming requests with JSON payloads, convert JSON to js objects.
app.use(express.json())

// app.use(): Express function, mounts specified functions at specified path.
app.use('/api', api_routes)

// Error handling for invalid paths (ie, paths there are no handlers for)
// Express will attempt to locate a handler matching the URL requested. If match found, Express will stop looking for handlers. If no match found, express will try to locate other handlers.
app.use(function(req,
                 res, next) {
    res.status(404).send('Not found')
})

// Handling for server errors - valid request, but cannot be completed for some reason
app.use(function(err,
                 req,res, next) {
    console.error(err.stack) // log stack trace
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})
// process.env.PORT - reads PORT environment variable
// typical PC probably doesn't have PORT environment variable set, but Heroku does