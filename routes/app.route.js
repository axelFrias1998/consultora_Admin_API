const express = require("express");

const authRouter = require("./auth.route");
const auditsRouter = require("./audit.route");

function routerApi(app){
	const router = express.Router();
	app.use("/api", router);
	router.use("/auth", authRouter);
	router.use("/audit", auditsRouter);
}

module.exports = routerApi;
