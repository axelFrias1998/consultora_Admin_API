//Swagger options
const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Admin API",
			version: "1.0.0",
			description: "Documentación API de consultoría"
		},
		servers: [
			{
				url: "http://localhost:2000"
			}
		]
	},
	apis: ["./routes/*.js"]
};

module.exports = swaggerOptions;
