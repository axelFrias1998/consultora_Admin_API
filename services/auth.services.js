const User = require("../models/user.model");
const boom = require("@hapi/boom");

class AuthService {
	async registerUser(data){
		const user = new User({...data});
		const savedUser = await user.save();
		return savedUser;
	}

	async emailExists(email){
		const exists = await User.findOne({email: email});
		return exists;
	}

	async userExists(email){
		const exists = await User.findOne({email: email});
		return exists;
	}
};

module.exports = AuthService;
