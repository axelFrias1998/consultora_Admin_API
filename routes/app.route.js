const express = require("express");

//TODO Hacer rutas de usuario
const usersRouter = require("./users.route");
const authRouter = require("./auth.route");
const auditsRouter = require("./audits.route");

function routerApi(app){
	const router = express.Router();
	app.use("/api", router);
	router.use("/users", usersRouter);
	router.use("/auth", authRouter);
	router.use("/audits", auditsRouter);
}

module.exports = routerApi;
