const express = require('express');
const router_introduce = express.Router();

const user_controller = require('../controller/contact_controller')

router_introduce.get('/',user_controller.page_introduct)

module.exports = router_introduce