// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const db = require('../models');
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const config = require('../config/config');




//index route
router.get('/', async (req, res) => {
	const allResume = await db.Resume.find({});
	res.json(allResume);
});


// Create Route without authentication for admin
router.post('/', async (req, res) => {
	const createdResume = await db.Resume.create(req.body);
	res.json(createdResume);
});









module.exports = router;