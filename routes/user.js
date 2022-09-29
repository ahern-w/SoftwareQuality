const { Router }= require('express')
const express = require('express')

const {
    getSpecifcCustomers,
    

} = require('../controllers/user');

const router = express.Router();


router.get ('/customer',getSpecifcCustomers);
router.post('/customer',getSpecifcCustomers); 



module.exports = router; 

