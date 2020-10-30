var models = require('../models/mod_tab.js')

module.exports = {
    get: (req, res) => {
        models.getAllTasks((err, data) => {
            if (err) { res.send("error") }
            else { res.json(data) }
        })
    }
    , post: (req, res) => {
        console.log("HEEEEEEEEEERE", req.body)
        models.insertTask(req.body, (err) => {
            if (err) { res.send("NOT ADDED") }
            else { res.send("DONE") }
        })
    }
}