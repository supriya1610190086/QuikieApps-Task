const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const facebook_clone = require('./Route/signup_login')
const friendlist = require('./Route/friendlist')
const posts = require('./Route/myprofile')
const community = require('./Route/community')



const PORT = 8000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', facebook_clone, friendlist, posts, community)

app.listen(PORT, () => {
    console.log(`Server Running on port:http://localhost:${PORT}`)
})