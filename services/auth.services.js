const User = require("../models/user.model");
const boom = require("@hapi/boom");

class AuthService {
	async registerUser(data){
		const user = new User({...data});
		const savedUser = await user.save();
		return savedUser;
	}
};

module.exports = AuthService;
