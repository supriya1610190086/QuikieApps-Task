const express = require('express')
const router = express.Router()
const routes = require('../Controller/signup_login')
const auth = require("../Authorization/auth_token");

router.post("/Signup", routes.Signup)
router.post("/Login", routes.Login)

module.exports = router