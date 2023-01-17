// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
	name: { type: String, required: true },
    phonenumber: { type: String },
    email: { type: String },
	aboutme: { type: String },
	education: { type: String },
	experience: { type: String },
	relevantprojects: { type: String },
	skills: { type: String },
	
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
