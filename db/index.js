const mysql = require('mysql');

const con = mysql.createConnection({
    user: 'root',
    port: 3000,
    password: 'tryHard123@',
    database: 'task2'
})



con.connect((err) => {
    if (err) {
        console.log('ERR')
        return;
    }
    //throw new Error("NOT CONNECTED"); //err.message
    else {
        console.log("CONNECTED");
    }
})


module.exports = con;


/* used :   npm init -y
            npm install mysql
            npm install --save-dev nodemon

            */
