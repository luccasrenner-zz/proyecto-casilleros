//Aca voy a importar los servicios
let Casilleros = require( "../../services/casilleros.service" );

module.exports = {

    GET_CASILLEROS : ( req, res ) => {
        
        Casilleros.getAll(res);
        
    },
    GET_CASILLEROS_BY_ID : ( req, res ) => {
        
        Casilleros.get( res, req.params.id );
        
    }

}
