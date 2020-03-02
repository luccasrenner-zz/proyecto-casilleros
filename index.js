const express = require( "express" );
const app = express( );

const { SERVER } = require( "./app/constants/constants" );

const Router = require( "./app/router/router" );

app.use( express.json( ) );
app.use( Router );


app.listen( SERVER.PORT );