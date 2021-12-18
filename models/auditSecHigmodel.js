const mongoose = require("mongoose");

const auditSecHig = mongoose.Schema({
	nombreSucursal: {
		type: String,
		require: true,
		max: 255,
		min: 6,
	},
	nombreGerencia: {
		type: String,
		require: true,
		max: 255,
		min: 6,
	},
	nombreAis: {
		type: String,
		require: true,
		max: 255,
		min: 6,
	},
	dateInit: {
		type: Date,
		default: Date.now
	},
	dateFinish: {
		type: Date,
		default: Date.now
	},
	calificacion: {
		type: Number
	},
	pregunta: {
		type: [Number]
	},
});

module.exports = mongoose.model("AuditSeguridadAlimentaria", auditSecHig);
