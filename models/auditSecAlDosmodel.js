const mongoose = require("mongoose");

const auditSecAlDos = mongoose.Schema({
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
	limpiezaSanitizacion: {
		type: [Number]
	},
	manejoAlimentos: {
		type: [Number]
	},
	higienePersonal: {
		type: [Number]
	},
	controlTemperaturas: {
		type: [Number]
	},
	controlPlagas: {
		type: [Number]
	},
	gerencia: {
		type: [Number]
	},
});

module.exports = mongoose.model("AuditSeguridadAlimentaria", auditSecAlDos);
