var db = require('../db')

module.exports = {
    getAllTasks: (callback) => {
        db.query('SELECT * FROM tasks', (err, data) => {
            if (err) {
                console.log(err)
                callback(err, null)
            }
            else {
                console.log(data)
                callback(null, data)
            }
        })

    }

    , insertTask: (input, callback) => {
        db.query(`INSERT INTO tasks(task) VALUES ("${input.task}")`, (err, data) => {
            if (err) {
                console.log(err)
                callback(err, null)
            }
            else {
                console.log(data)
                callback(null, data)
            }
        })
    }
}



