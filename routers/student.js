const express = require('express');
const { AddNewStudents, editStudents } = require('../controllers/student');
const router = express.Router()
const multer = require('multer');
const path = require('path');

// multer initialise
const storage = multer.diskStorage({
    destination : (req, file, cv)=>{
        cv(null, path.join(__dirname, '../assets/upload/'))
    },
    filename : (req, file, cv)=>{
        cv(null, Date.now()+`_`+file.originalname)
    }
})
const upload = multer({
    storage : storage
}).single('photo')

// student api routers
router.post('/', upload ,AddNewStudents)
router.post('/edit', upload ,editStudents)

module.exports = router;