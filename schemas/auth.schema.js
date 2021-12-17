const joi = require("joi");

const id = joi.string();
const name = joi.string().min(4);
const email = joi.string().email();
const password = joi.string().min(6);

const registerSchema = joi.object({
	name: name.required(),
	email: email.required(),
	password: password.required()
});

const loginSchema = joi.object({
	email: email.required(),
	password: password.required()
});

const getUserSchema = joi.object({
	id: id.required()
});

module.exports = { registerSchema, loginSchema, getUserSchema };
