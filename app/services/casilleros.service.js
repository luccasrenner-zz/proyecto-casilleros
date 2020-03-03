const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'asdASD123',
  database : 'bunnykingdom'
});

class Casilleros {

    getAll( res ) {
        connection.query(
            'SELECT * FROM casilleros', 
            function (error, results, fields) {
                if (error){ 
                    console.error(error);
                    return;
                }

                res.json(results);
            }
        );
    }

    get( res, id ) {
        connection.query(
            'SELECT * FROM casilleros WHERE id = ?',
            [id], 
            function (error, results, fields) {
                if (error){ 
                    console.error(error);
                    return;
                }
                    

                if (results.length > 0) {
                    res.json(results[0]);
                } else {
                    res.sendStatus(404);
                }
            }
        );
    }

}

module.exports = new Casilleros();
