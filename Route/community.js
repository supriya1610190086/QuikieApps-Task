const express = require('express')
const router = express.Router()
const routes = require('../Controller/community')
const auth = require("../Authorization/auth_token");

router.get("/GetByIdPost/:post_id", routes.GetByIdPost)
router.get("/user_create_All_post/:user_id", routes.user_create_All_post)


module.exports = router