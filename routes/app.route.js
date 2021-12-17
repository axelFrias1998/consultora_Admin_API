const express = require("express");

//TODO Hacer rutas de usuario
const usersRouter = require("./users.route");
const authRouter = require("./auth.route");

function routerApi(app){
	const router = express.Router();
	app.use("/api", router);
	router.use("/users", usersRouter);
	//router.use("/auth", authRouter);
}

module.exports = routerApi;
