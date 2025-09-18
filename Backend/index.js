import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { nanoid } from 'nanoid';
import QRCode from 'qrcode';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
     .then(() => console.log("Connected to MongoDB"))
     .catch(err => console.log("Database connection error: ", err))

const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: String,
    clicks: { type: Number, default: 0 },
});   

const Url = mongoose.model('Url', urlSchema);
app.post('/api/short', async (req, res) => {
    try{
        const { originalUrl } = req.body;
        if(!originalUrl){
            return res.status(400).json({ error: "originalUrl is required" });
        }
        const shortUrl = nanoid(8);
        const url= new Url({ originalUrl, shortUrl });
        const myUrl=`http://localhost:3000/${shortUrl}`;
        const qrImg=await QRCode.toDataURL(myUrl);
        await url.save();
        return res.status(200).json({ message: "Short URL created successfully",shortUrl: myUrl, qrImg });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: "server error" });
    }
})

app.get('/:shortUrl', async (req, res)=>{
    try{
        const { shortUrl } = req.params;
        const url = await Url.findOne({ shortUrl});
        if(url){
            url.clicks++;
            await url.save();
            return res.redirect(url.originalUrl)
        }
        else{
            return res.status(404).json({ error: "URL not found" });
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: "server error" });
    }

})


app.listen(3000, () => console.log('Server started on port 3000'))


