const express = require('express');
const router_contact = express.Router();

// Require user controller
const user_controller = require('../controller/contact_controller')

// router_contact.get('/',(req,res)=>{
//     res.render('html/contact')
// })

router_contact.post('/',user_controller.post_create)
router_contact.get('/',user_controller.page_contact)

module.exports = router_contact 