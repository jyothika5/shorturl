import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
     .then(() => console.log("Connected to MongoDB"))
     .catch(err => console.log("Database connection error: ", err))


app.listen(3000, () => console.log('Server started on port 3000'))


