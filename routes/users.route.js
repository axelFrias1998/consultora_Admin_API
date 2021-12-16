const router = require("express").Router();
const User = require("../models/user.model");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - Name
 *         - Password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         Name:
 *           type: string
 *           description: The name of the user
 *         Password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         id: d5fE_asz
 *         name: Axel F
 *         password: Perrona.com
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     responses:
 *       200:
 *         description: The list of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *
 */

router.get("/", async (request, response) => {
	try {
		//const users = await User.find(item => item.name === "");
		//findbyid, remove updateone
		const users = await User.find();
		response.json(users);
	} catch (error) {
		response.json(error);
	}
});

router.post("/", async (request, response) => {
	const newUser = new User({ ...request.body });
	console.log(newUser);
	try {
		const savedUser = await newUser.save();
		response.json(savedUser);
	} catch (error) {
		console.log(error)
		response.json({message: error});
	}
});

module.exports = router;
