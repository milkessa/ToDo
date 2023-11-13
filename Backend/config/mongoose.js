import mongoose from "mongoose";
import 'dotenv/config'
export const connectToMongo=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Successfully Connect to mongoose')
    }
    catch(err){
        console.log(err)
    }
}