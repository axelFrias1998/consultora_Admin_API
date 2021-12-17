const router = require("express").Router();
const AuthService = require("../services/auth.services");

const validatorHandler = require("../middlewares/validator.handler");
const { registerSchema, loginSchema, getUserSchema }= require("../schemas/auth.schema");

const service = new AuthService();

router.post("/register", validatorHandler(registerSchema, "body"), async (request, response, next) => {
	try {
		console.log("hola");
		const body = request.body;
		const savedUser = await service.registerUser(body);
		response.json(savedUser);
	} catch (error) {
		next(console.error);
	}
});


router.post("/login", validatorHandler(loginSchema, "body"), async (request, response, next) => {
	response.send("register");
});

module.exports = router;
