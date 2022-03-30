const express = require('express')
const router = express.Router()
const routes = require('../Controller/friendlist')
const auth = require("../Authorization/auth_token");

router.post("/ReqeustFriend", auth, routes.ReqeustFriend)
router.post("/AcceptRequest", auth, routes.AcceptRequest)
router.delete("/RejectRequest/:accept_friend_id", routes.RejectRequest)

module.exports = router