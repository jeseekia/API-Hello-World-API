// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const languages = require('./controllers/languages_controller')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Jeseekia\'s Hello World! API')
})

// LANGUAGES
const languagesController = require('./controllers/languages_controller')
app.use('/languages', languagesController)

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})