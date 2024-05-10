import express from "express"
import dotenv from  "dotenv"
import { Connection } from "./config/db";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081

app.listen(PORT,async()=>{
    try {
        await Connection
        console.log("Connection Estasblished Successfully On", PORT)
    } catch (error) {
        
    }
})