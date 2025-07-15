import mongoose from "mongoose";
import { Server } from 'http'
import app from "./app";
import { envVars } from "./app/config/env";

let server : Server;

const startServer = async () => {
   try {
        console.log(envVars.NODE_ENV);
        
        await mongoose.connect(envVars.DB_URL);
        console.log('connected');
        
        server = app.listen(envVars.PORT , ()=> {
            console.log(`Example app listening on port ${envVars.PORT}`)
        })
   } catch (error) {
        console.log("err",error);
   }
}

startServer()

process.on("unhandledRejection", ()=>{
    console.log('unhandle');

    if(server){
        server.close(()=> {
            process.exit(1)
        })
    }
    process.exit(1)
})


process.on("uncaughtException", ()=> {
    console.log('uncaught')
    if(server){
        server.close(()=> {
            process.exit(1)
        })
    }
    process.exit(1)
})