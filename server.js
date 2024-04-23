import express from 'express';
import {PrismaClient} from '@prisma/client';
import userRouters from "./routers/userRouter.js";
import cors from 'cors';

const prisma =new PrismaClient();
const app=express();
app.use(cors());
app.use(express.json());
app.use('/users',userRouters);
app.listen(8000,()=>{
    console.log("http://localhost:8000");
})