function logErrors (error, request, response, next){
	//Monitoreo y continuar con la ejecución normal
	next(error);
}

function errorHandler(error, request, response, next){
	response.status(500).json({
		message: error.message,
		stack: error.stack
	});
}

function boomErrorHandler(error, request, response, next){
	if(error.isBoom){
		const { output } = error;
		response.status(output.statusCode).json(output.payload);
	}
	next(error);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
