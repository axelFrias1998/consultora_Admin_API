const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const mongoose = require("mongoose");
//const cors = require("cors");
require("dotenv/config");

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const routerApi = require("./routes/app.route");

const app = express();

//Si heroku inserta puerto o el puerto 2000
const port = process.env.PORT || 2000;

//Middleware para recibir objetos tipo json
app.use(express.json());

//TODO configurar bien los CORS
/*const whitelist = [];
const options = {
	origin: (options, callback) => {
		if(whitelist.includes(origin) || !origin){
			callback(null, true);
		} else{
			callback(new Error("Origen no permitido"));
		}
	}
}
app.use(cors(options));*/

const options = {
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
const spects = swaggerJsDoc(options);

//ROUTES
app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(spects));
app.get("/", (request, response) => {
	console.log(process.env.DB_CONNECTION);
	response.send("Funciona");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected!"));

app.listen(port, () => {
	console.log(`Running on: ${port}`);
});
