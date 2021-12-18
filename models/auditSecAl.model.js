const mongoose = require("mongoose");

const auditSecAl = mongoose.Schema({
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
	higieneSanidad: {
		type: [Number]
	},
	controlRegistros: {
		type: [Number]
	},
	participacionGerencialDepartamento: {
		type: [Number]
	},
	participacionGerencialGeneral: {
		type: [Number]
	},
});

module.exports = mongoose.model("AuditSeguridadAlimentaria", auditSecAl);
