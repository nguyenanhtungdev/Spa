const express = require('express');
const router_home = express.Router();

router_home.get('/',(res,req)=>{
    res.render('html/home')
})

module.exports = router_home 