//Aca voy a importar los servicios
let Casilleros = require( "../../services/casilleros.service" );
const Joi = require('@hapi/joi');

const schema = Joi.object({
    letra: Joi.string().required(),
    numero: Joi.number().required(),
    terreno: Joi.string().valid('AGUA','PASTO','MONTAÑA','GRANJA','BOSQUE').required(),
    recurso: Joi.string().valid('PECES','MADERA','ZANAHORIAS').required(),
    ciudad: Joi.boolean()
});

module.exports = {

    GET_CASILLEROS : ( req, res ) => {
        
        Casilleros.getAll(res);
        
    },
    GET_CASILLEROS_BY_ID : ( req, res ) => {
        
        Casilleros.get( res, req.params.id );
        
    },
    INSERT_CASILLERO : (req, res) => {

        const result = schema.validate(req.body);
        if (result.error) {
            return res.status(400).send(result.error);
        }
        
        Casilleros.insert(res, req.body);

    },
    DELETE_CASILLERO : (req, res) => {

        Casilleros.delete(res, req.params.id);

    }
}
