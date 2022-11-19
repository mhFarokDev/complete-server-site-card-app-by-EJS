const student = require("../models/studentsModel");


/**
 * @name /api/students
 * @desc Add New Data
 * @access public
 * @param {*} req 
 * @param {*} res 
 */
const AddNewStudents = (req, res)=>{
    res.redirect('/')
    student.create({
        ...req.body,
        photo : req.file.filename
    });
 }

 /**
  * @desc edit student data
  * @name /student/edit
  * @access public
  * @param {*} req 
  * @param {*} res 
  */
 const editStudents = async (req, res) =>{
    let photoName = req.body.prevImgname;
    if(req.file){
        photoName = req.file.filename;
    }
    await student.findByIdAndUpdate(req.body.id, {
        ...req.body,
        photo : photoName
    },{
        new :true
    })
    res.redirect('/')
    
 }

module.exports = {AddNewStudents, editStudents}