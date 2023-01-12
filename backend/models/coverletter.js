// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coverletterSchema = new Schema({
	name: { type: String, required: true },
    phonenumber: { type: String },
    email: { type: String },
	contactTitle: { type: String },
	opening: { type: String },
	body: { type: String },
	closing: { type: String },
});

const Coverletter = mongoose.model('Coverletter', coverletterSchema);

module.exports = Coverletter;
