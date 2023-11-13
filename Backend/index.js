import  Express  from "express";
import cors from 'cors';
//import routes from ".src/routes/index.js"
import { connectToMongo } from "./config/mongoose.js";
const app=Express()

app.use(cors())
//app.use('/', routes)
const port=process.env.PORT || 500;
try{
    await connectToMongo();
    app.listen(port, ()=>{
        console.log("Server is running on port: ${port}")
    })
}
catch(err){
    console.log(err)
}