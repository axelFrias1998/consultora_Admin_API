const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const express = require("express");

function accessHandler(request, response, next) {
	const token = request.header('authorization');
	console.log(token);
	if(!token) {
		console.log("Sin token");
		next(boom.forbidden());
	}
	const verified = jwt.verify(token, process.env.TOKEN_SECRET);
	if(!verified){
		console.log("token malo");
		next(boom.badRequest());
	}
	request.user = verified;
}

module.exports = accessHandler;
