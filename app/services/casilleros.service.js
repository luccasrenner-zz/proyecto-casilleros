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
                if (error) return res.status(500).send(error);

                res.json(results);
            }
        );
    }

    get( res, id ) {
        connection.query(
            'SELECT * FROM casilleros WHERE id = ?',
            [id], 
            function (error, results, fields) {
                if (error) return res.status(500).send(error);

                if (results.length > 0) {
                    res.json(results[0]);
                } else {
                    res.sendStatus(404);
                }
            }
        );
    }

    insert (res, body) {
        var self = this;

        connection.query(
            "INSERT INTO casilleros (letra, numero, terreno, recurso, ciudad) VALUES (?,?,?,?,?)",
            [body.letra, body.numero, body.terreno, body.recurso, body.ciudad],
            function (error, results, fields) {
                if (error) return res.status(500).send(error);

                res.status(201);
                self.get(res, results.insertId);
            }
        );
    }

    delete (res, id) {
        connection.query(
          "DELETE FROM casilleros WHERE id = ?",
          [id],
          function (error, results, fields) {
            if (error) return res.status(500).send(error);

            if (results.affectedRows > 0) {
                res.sendStatus(204);
            } else {
                res.sendStatus(404);
            }
          }  
        );
    }

}

module.exports = new Casilleros();
