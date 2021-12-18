const router = require("express").Router();
const bcrypt = require("bcryptjs");

const validatorHandler = require("../middlewares/validator.handler");
const AuthService = require("../services/auth.services");
const { registerSchema, loginSchema }= require("../schemas/auth.schema");

const service = new AuthService();

/**
 * @swagger
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       required:
 *         - Name
 *         - Email
 *         - Password
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user
 *         Name:
 *           type: string
 *           description: The name of the user
 *         Email:
 *           type: string
 *           description: The email of the user
 *         Password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         id: d5fE_asz
 *         name: Axel F
 *         email: axel.frias257@gmail.com
 *         password: cricosos123
 */

router.get("/", (request, response) => {
	response.json({message: "OK"});
});

/**
 * @swagger
 * /Register:
 *   get:
 *     summary: Returns the user created
 *     responses:
 *       200:
 *         description: The registration endpoint
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Auth'
 *
 */

router.post("/register", validatorHandler(registerSchema, "body"), async (request, response, next) => {
	try {
		const body = request.body;
		//Check if the email exists
		const emailExist = await service.emailExists(body.email);
		if(emailExist){
			return response.status(400).json({message: "Email already exists"});
		}

		//HASH password
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(body.password, salt);

		const user = {
			name: body.name,
			email: body.email,
			password: hashPassword
		};

		const savedUser = await service.registerUser(user);
		return response.json({user: savedUser._id});
	} catch (error) {
		next(console.error);
	}
});

router.post("/login", validatorHandler(loginSchema, "body"), async (request, response, next) => {
	try {
		const body = request.body;
		//Check if the email exists
		const user = await service.userExists(body.email);
		if(!user){
			return response.status(400).json({message: "Email or password are incorrect"});
		}
		const validPass = await bcrypt.compare(body.password, user.password);
		return response.json({user: savedUser._id});
	} catch (error) {
		next(console.error);
	}
});

module.exports = router;
