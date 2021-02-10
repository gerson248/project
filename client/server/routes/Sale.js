const express = require('express')
const saleCtrl = require('../controllers/Sale')
const router = express.Router()

router.post('/sale', saleCtrl.createSale)
router.get('/sale/:id', saleCtrl.getSale)
router.get('/sales', saleCtrl.getSales)

module.exports = router
