// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
// packages
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
// configs
const passport = require('../config/passport');
const config = require('../config/config');
// models
const db = require('../models');
const User = db.User;

// +-+-+-+-+-+-+
// |R|O|U|T|E|S|
// +-+-+-+-+-+-+

//Use these simple routes ONLY if you are not yet setup with jwt-simple
// // Create User
// router.post('/', (req, res) => {
// 	db.User.create(req.body, (err, user) => {
// 		res.json(user);
// 	});
// });

// // Show Route
// router.get('/:id', async (req, res) => {
// 	const user = await db.User.findById(req.params.id);
// 	res.json(user);
// });

// SIGN UP ROUTE (create user)
router.post('/signup', (req, res) => {
	// verify the request body has an email and password
	if (req.body.username && req.body.password) {
		// make a newUser object with the request body and password
		let newUser = {
			username: req.body.username,
			password: req.body.password,
		};
		// check if a user exists with the same email and password
		User.findOne({ username: req.body.username }).then((user) => {
			// if a user doesn't exist...
			if (!user) {
				// ...create a new one.
				User.create(newUser).then((user) => {
					// if the database creates a user successfully, assign a JWT to the user and send the JWT as the response
					if (user) {
						const payload = {
							id: newUser.id,
						};
						const token = jwt.encode(payload, config.jwtSecret);
						res.json({
							token: token,
						});
						// send an error if the database fails to create a user
					} else {
						res.sendStatus(401);
					}
				});
				// send an error if the user already exists
			} else {
				res.sendStatus(401);
			}
		});
		// send an error if the request body does not have an email and password
	} else {
		res.sendStatus(401);
	}
});

// LOG IN ROUTE (find existing user)
router.post('/login', async (req, res) => {
	// attempt to find the user by their email in the database
	const foundUser = await User.findOne({ username: req.body.username });
	// check to:
	// 1. make sure the user was found in the database
	// 2. make sure the user entered in the correct password
	if (foundUser && foundUser.password === req.body.password) {
		// if the above applies, send the JWT to the browser
		const payload = { id: foundUser.id };
		const token = jwt.encode(payload, config.jwtSecret);
		res.json({
			token: token,
			user: foundUser,
		});
		// if the user was not found in the database OR their password was incorrect, send an error
	} else {
		res.sendStatus(401);
	}
});

// GET USER DATA (if user is logged in)
router.get('/', async (req, res) => {
	const token = req.headers.authorization;
	const decode = jwt.decode(token, config.jwtSecret);
	const foundUser = await db.User.findById(decode.id);
	// console.log(decode.id)
	res.json(foundUser);
	// const foundUser = await User.findById(req.params.id)
	// if (foundUser) {
	// 	res.json(foundUser)
	// } else {
	// 	res.sendStatus(404)
	// }
});

module.exports = router;
