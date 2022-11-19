const Student = require('../models/studentsModel');

/**
 * @desc get all student data
 * @name GET /student/
 * @access public
 */
const viewAllData = async (req, res) =>{
    res.render('index', {
        Student : await Student.find(),
    })
}
/**
 * 
 * @dec create new data
 * @name POST /student
 * @access public
 */
const createStudent = (req, res) =>{
    res.render('create')
}

/**
 * @desc view single data
 * @name GET /show
 * @access public
 */

const showSingleData = async (req, res) =>{
    res.render('show',{
        singleStudent : await Student.findById(req.params.id)
    })
    
    
}

const deleteSingleData = async (req, res) =>{
    await Student.findByIdAndDelete(req.params.id)
    res.redirect('/')
}


const editSingleData = async (req, res)=>{
    let singleData = await Student.findById(req.params.id)
    res.render('edit',{
        data : singleData
    })
}


module.exports = {
    viewAllData,
    createStudent,
    showSingleData,
    deleteSingleData,
    editSingleData
}