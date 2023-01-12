// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
// access node packages
const express = require("express")
const app = express()
const cors = require("cors")
const passport = require('./config/passport')()
require("dotenv").config()
// access models
const db = require("./models")
// access controllers
const userCtrl = require("./controllers/users")
const resumeCtrl = require("./controllers/resumes")
const coverletterCtrl = require("./controllers/coverletters")



// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+

// cors allows our frontend to communicate with the backend
app.use(cors())
// body parser: used for POST/PUT/PATCH routes: this will take incoming strings from the request body that are url encoded and parse them into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(passport.initialize())

// Use controllers for all other routes
app.use('/resume', resumeCtrl)
app.use('/user', userCtrl)
app.use('/coverletter', coverletterCtrl);

// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+
// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})