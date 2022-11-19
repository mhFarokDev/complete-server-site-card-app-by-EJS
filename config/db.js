const mongoose = require('mongoose');


//  create a mongodb Connection
const mongoConnect = async () =>{
    try {

        const connect = await mongoose.connect(process.env.MONGO_TOOKEN)
        console.log(`MongoDB Server is ready.`.bgBlue.black);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoConnect;