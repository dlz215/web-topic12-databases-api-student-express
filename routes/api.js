// Need Express library in this directory as well (in addition to base directory - server.js)
let express = require('express')

// 'require' will read index file if you specify a directory instead of a file
// index.js file in models directory exports the Sequelize database object. DB needs to be available to API routes.
let db = require('../models')

// Initialize object based on db table. Can read, write, delete data.
let Student = db.Student

// Initialize Router object
let router = express.Router()

// Add routes to Router object

/*    GET /students    */
router.get('/students',
    function(req, res, next){

        Student.findAll( { order: ['present','starID'] } )

            .then( students => {
                // Need return statement inside of a promise. Returns JSON object for each student in table.
                // Sending res.json response automatically sends 200 response code
                return res.json(students)
            })

            .catch( err => next(err) )
    })

/*    POST /students    */
router.post('/students',
    function(req, res, next){

        // req.body: API request body
        Student.create(req.body)

            .then(data => {
                // Conventional response code for successfully creating something is 201
                return res.status(201).send('ok')
            })

            .catch(err => {
                // handle user errors, eg missing starID or name
                if (err instanceof db.Sequelize.ValidationError) {
                    // 400 bad request
                    let messages = err.errors.map( e => e.message)
                    return res.status(400).json(messages)
                }
                // Handle unexpected errors (goes to 500 error function in server.js)
                return next(err)
            })
    })

/*    PATCH /students/{id}    */
router.patch('/students/:id',
    function(req, res, next) {

        // get ID from request parameter
        let studentID = req.params.id
        let updatedStudent = req.body

        Student.update( updatedStudent, { where: {id: studentID} } )

            .then( (rowsModified) => {
                // rowsModified is an array. First element in array is number of rows modified.
                let numberOfRowsModified = rowsModified[0]

                if (numberOfRowsModified == 1) {
                    return res.send('ok')
                } else { //no student in database with ID provided
                    return res.status(404).json(['Student with that id not found'])
                }
            })

            .catch( err => {
                // validation error - bad request
                if (err instanceof db.Sequelize.ValidationError) {
                    let messages = err.errors.map( e => e.message )
                    return res.status(400).json(messages)
                } else { // unexpected error, 500
                    return next(err)
                }
            })
    })

/*    DELETE /students/{id}    */
router.delete('/students/:id',
    function(req, res, next) {

        let studentID = req.params.id

        Student.destroy( { where: {id: studentID} } )

            .then( (rowsDeleted) => {
                if (rowsDeleted == 1) {
                    return res.send('ok')
                } else {
                    return res.status(404).json(['Not found'])
                }
            })

            .catch( err => next(err) )
    })

// Export Router object
module.exports = router


