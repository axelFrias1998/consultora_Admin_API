const router = require("express").Router();

router.post("/register", (request, response) => {
	response.send("register");
});


router.post("/login", (request, response) => {
	response.send("register");
});

module.exports = router;
