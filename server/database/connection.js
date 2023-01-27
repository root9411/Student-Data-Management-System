require('dotenv').config();
const mongoose = require('mongoose')


const connectDB = async()=>{
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database Connected")
    }catch(error){
        console.log("DataBase Not Connected")
        process.exit(1)
    }
}

module.exports = connectDB;