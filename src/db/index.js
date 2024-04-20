

import mongoose from "mongoose";
import {DB_NAME} from '../constant.js'




const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`connection instance : ${connectionInstance}`);
    }catch(err){
        console.log("MONGODB CONNCETION ERROR: ", err);
        process.exit()
    }
}

export default connectDB;