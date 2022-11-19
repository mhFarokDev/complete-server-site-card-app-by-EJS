const express = require('express');
const { viewAllData, createStudent, showSingleData, deleteSingleData, editSingleData } = require('../controllers/viewController');
const router = express.Router()

// ejs View engine routers
router.get('/',viewAllData)
router.get('/create',createStudent)
router.get('/show/:id',showSingleData)
router.get('/edit/:id',editSingleData)
router.get('/delete/:id',deleteSingleData)



module.exports = router;