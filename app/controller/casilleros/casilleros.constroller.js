//Aca voy a importar los servicios
let Casilleros = require( "../../services/casilleros.service" );

module.exports = {

    GET_CASILLEROS : ( req, res ) => {
        
        res.json( Casilleros.GET() );
        
    },
    GET_CASILLEROS_BY_ID : ( req, res ) => {
        
        res.json( Casilleros.GET( req.params.id ) );
        
    }

}