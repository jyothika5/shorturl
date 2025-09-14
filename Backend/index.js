import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { nanoid } from 'nanoid';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// const urlSchema = new mongoose.Schema({
//     originalUrl: String,
//     shortUrl: String,
//     clicks: { type: Number, default: 0 },
// });
// const Url = mongoose.model('Url', urlSchema);

// app.post('/api/short', async (req, res) => {
//     try {
//         const { originalUrl } = req.body;
//         const shortUrl = nanoid(8);
//         const Url = new Url({ originalUrl, shortUrl });
//         await Url.save();
//         res.status(200).json({message: 'Short URL created successfully', url: Url}); 
//     }
//     catch (error) {
//     }
// })    
app.listen(3000, () => { console.log('Server started on port 3000'); });
