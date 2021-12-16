const joi = require("joi");

const registerSchema = {
	name: joi.string().min(6).required(),
	email: joi.string().min(6).required().email(),
	password: joi.string().min(6).required()
};

module.exports = registerSchema;
