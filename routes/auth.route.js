const router = require("express").Router();
const User = require("../models/user.model");
const { registerSchema } = require("../schemas/auth.schema");

router.post("/register", async (request, response) => {
	try {
		const user = new User({...request.body});
		const savedUser = await user.save();
		response.json(savedUser);
	} catch (error) {
		response.json({message: error})
	}
});


router.post("/login", (request, response) => {
	response.send("register");
});

module.exports = router;
