const dotenv = require('dotenv').config();
const express = require('express');
const app = express()
const path = require('path')
const expresslayout = require('express-ejs-layouts');
const mongoConnect = require('./config/db.js');
const colors = require('colors')


// config dotenv
const PORT = process.env.PORT || 5050;

// get object from form
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// MongoDB Connect
mongoConnect()

// ejs setup

app.set("view engine", "ejs")
app.set("layout", "layout/app")
app.use(expresslayout)


// static folders
// app.use(express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))


// view router
            // app.get('/', (req, res)=>{
            //     res.sendFile('/public/index.html', {root : __dirname})
            // })
            // app.get('/about', (req, res)=>{
            //     res.sendFile('/public/about.html', {root : __dirname})
            // })

// ejs engine
// app.get('/', (req, res)=>{
//     res.render('index')
// })


// study ejs 
app.get('/about', (req, res)=>{
    res.render('about', {
        title : 'This is our First EJS Project',
        fruits : ['alo', 'potol', 'kumra'],
        error : {
            condition : true,
            message : "Server is Down .!."
        }
    })
})
// routers
app.use('/', require('./routers/viewRouter.js'))
app.use('/api/student', require('./routers/student.js'))

app.listen(PORT, ()=>{
    console.log(`server is running in port ${PORT}`);
})