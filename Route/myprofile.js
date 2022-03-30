const express = require('express')
const router = express.Router()
const routes = require('../Controller/myprofile')
const auth = require("../Authorization/auth_token");

router.post("/Createpost", auth, routes.Createpost)
router.delete("/Deletepost/:post_id", routes.Deletepost)
router.post("/Visibility", auth, routes.Visibility)


module.exports = router