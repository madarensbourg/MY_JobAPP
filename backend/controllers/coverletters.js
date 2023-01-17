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
	const allCoverletter = await db.Coverletter.find({});
	res.json(allCoverletter);
});


// Create Route without authentication 
router.post('/', async (req, res) => {
	const createdCoverletter = await db.Coverletter.create(req.body);
	res.json(createdCoverletter);
});

// Show Route
router.get('/:id', async (req, res) => {
	const coverletter = await db.Coverletter.findById(req.params.id);
	// console.log(trail._id)
	res.json(coverletter);
});

// Delete Route without authentication 
router.delete('/:id', async (req, res) => {
	await db.Coverletter.findByIdAndDelete(req.params.id);
	res.json({ status: 200 });
});

// Edit Route
router.get('/:id', async (req, res) => {
	const coverletter = await db.Coverletter.findById(req.params.id);
	console.log(coverletter._id)
	res.json(coverletter);
});

// Update Route without authentication for admin
router.put('/:id', async (req, res) => {
	const updatedCoverletter = await db.Coverletter.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.json(updatedCoverletter);
});



module.exports = router;