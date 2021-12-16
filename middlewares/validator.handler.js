const boom = require("@hapi/boom");

function validatorHandler(schema, property){
	//Es necesario crear middlewares de forma dinámica
	return (request, response, next) => {
		const data = request[property];
		//Abort early recupera todos los errores antes de regresar respuesta
		const { error }  = schema.validate(data, { abortEarly : false });
		if(error){
			next(boom.badRequest(error));
		}
		next();
	};
}

module.exports = validatorHandler;
