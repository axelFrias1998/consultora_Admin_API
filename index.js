const express = require("express");
//const cors = require("cors");

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

app.get("/", (request, response) => {
	response.send("Funciona");
});

app.listen(port, () => {
	console.log(`Running on: ${port}`);
});
