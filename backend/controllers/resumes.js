// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const db = require('../models');
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const config = require('../config/config');

// check if user is Authenticated 
function isAuthenticated(req, res, next) {
	if (req.headers.authorization) {
		next();
	} else {
		res.sendStatus(401);
	}
}

//index route
router.get('/', async (req, res) => {
	const allResume = await db.Resume.find({});
	res.json(allResume);
});


// Create Route without authentication 
router.post('/', async (req, res) => {
	const createdResume = await db.Resume.create(req.body);
	res.json(createdResume);
});

// Show Route
router.get('/:id', async (req, res) => {
	const resume = await db.Resume.findById(req.params.id);
	// console.log(trail._id)
	res.json(resume);
});

// Delete Route without authentication 
router.delete('/:id', async (req, res) => {
	await db.Resume.findByIdAndDelete(req.params.id);
	res.json({ status: 200 });
});

// Edit Route
router.get('/:id', async (req, res) => {
	const resume = await db.Resume.findById(req.params.id);
	console.log(resume._id)
	res.json(resume);
});

// Update Route without authentication for admin
router.put('/:id', async (req, res) => {
	const updatedResume = await db.Resume.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.json(updatedResume);
});

module.exports = router;