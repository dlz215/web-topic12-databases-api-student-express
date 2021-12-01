// Purpose of file: import sequelize models and make them available to rest of app

// Import Sequelize and DataTypes from Sequelize library
// DataTypes: object holding commonly used data types
let {Sequelize, DataTypes} = require('sequelize')

/* Need to examine code and environment and choose appropriate database specified in config.json:
    dev (sqlite) vs. prod (postgres) */
// process.env returns an object containing info (environment variables) on the user environment
// In Heroku NODE_ENV variable is set to 'production'. Typical PC doesn't have this variable set.

// Set env variable to 'development' if environment doesn't have NODE_ENV set
let env = process.env.NODE_ENV || 'development'

// __dirname = current directory (in this case models)
// JSON in config.json file is converted to js
// [env] - either 'development' or 'production' object is stored in config variable, depending on value of env variable
let config = require(__dirname + '/../config.json')[env]

let db = {}

let sequelize

// use_env_variable = postgres db URL
if (config.use_env_variable) {
    // Initialize Sequelize object using postgres db URL (Heroku). URL contains info on how to connect to db.
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    // Initialize Sequelize object using local sqlite db
    sequelize = new Sequelize(config)
}

// returns and calls the function defined in 'module.exports' in student.js
// function takes Sequelize and DataType object as an argument
let studentModel = require('./student')(sequelize, DataTypes)

// set up db object
db[studentModel.name] = studentModel

// configures db object
db.sequelize = sequelize // info on how to connect to specific sqlite/postgres database
db.Sequelize = Sequelize // Sequelize library

// db object exported has everything necessary to create database and student table, and for app to connect to database
module.exports = db


