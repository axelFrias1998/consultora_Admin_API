const router = require("express").Router();
require("dotenv/config");

const accessHandler = require("../middlewares/access.handler");

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Returns the id of the user created
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

router.get("/", accessHandler, (request, response) => {
	return response.json({post: "hola"});
});

module.exports = router;
