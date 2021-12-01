// Purpose of file: define student object and database table. Create

// exports a function to create and return the Student model
module.exports = (sequelize, DataTypes) => {

    // defines student object and student database table
    let student = sequelize.define('Student', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    })

    // Creates database tables
    // {force: true} - will overwrite any old database tables
    student.sync( {force: false} ).then( () => {
        console.log('Synced student table')
    })

    return student

}
