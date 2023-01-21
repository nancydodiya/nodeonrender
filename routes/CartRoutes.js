const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartController');

router.post('/cart',cartController.createCart)
router.get('/cart',cartController.getAllCart)
// router.get('/cart/:id',cartController.getCartById)
module.exports = router;