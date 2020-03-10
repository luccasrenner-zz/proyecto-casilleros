let express = require( "express" );
let Router = express.Router( );


const { 
    GET_CASILLEROS, 
    GET_CASILLEROS_BY_ID,
    INSERT_CASILLERO,
    DELETE_CASILLERO 
} = require( "../controller/casilleros/casilleros.constroller" );


Router.get( "/casilleros", GET_CASILLEROS );
Router.get( "/casilleros/:id", GET_CASILLEROS_BY_ID );
Router.post( "/casilleros", INSERT_CASILLERO );
Router.delete("/casilleros/:id", DELETE_CASILLERO );

module.exports = Router;
