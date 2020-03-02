let express = require( "express" );
let Router = express.Router( );


const { 
    GET_CASILLEROS, 
    GET_CASILLEROS_BY_ID 
} = require( "../controller/casilleros/casilleros.constroller" );


Router.get( "/casilleros", GET_CASILLEROS );
Router.get( "/casilleros/:id", GET_CASILLEROS_BY_ID );

module.exports = Router;
