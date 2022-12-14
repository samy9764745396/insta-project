const express = require('express');

const app = express();
const bodyParser = require("body-parser");
const multer = require('multer');
const PostData = require("./models/Post") 
const cors = require("cors");

const { cloudinary } = require ('./utils/cloudinary');
const formidable = require("formidable");
const fileupload = require('express-fileupload');



app.use(cors());
const upload = multer({  })
app.use(express.urlencoded());

app.use(express.json({limit : '50mb'}));  //limiting size of file
app.use(bodyParser.urlencoded({ limit : '50mb' , extended: true }))
app.use(bodyParser.json())


app.use(fileupload({useTempFiles: true}))                                     
// var publicDir = require('path').join(__dirname,'/public'); 
// app.use(express.static(publicDir));



app.post('/uploads', async (req,res)=>{
   // console.log(req.file);
   const file = req.files.image

   try{
    console.log(file);
    console.log(req.body);
    
    const result =  await cloudinary.uploader.upload(file.tempFilePath, {  //
        public_id: `${Date.now()}`, 
        resource_type: "auto",                                  // it can be anything image etc..
        upload_preset: "ml_default"                 // from cloudinary setting 
    })


    const url = result.secure_url;                             // it returns image url from cloudinary
    const { name, description, location } = req.body;
   
    try {
        if(!req.body.likes){
       const user = await PostData.create({
           name,
           description,
           location,
           image: { url: url},
       });
      }else{
      const user = await PostData.create({
           name,
           description,
           location,
           likes: req.body.likes,
           image: { url: url},
       });
      }
       
       res.json({ ok: "send " })
   } catch (e) {
       res.json({ error: e.message })
   }
    
    }catch(err){
      console.log("Error", err)
    return res.status(400).json({error: err})
    }
})


app.get("/", async (req, res) => {
    try {
        const data = await PostData.find();
        res.json(data)
    } catch (e) {
        res.json({ name: "error in loading data" })
    }

})

module.exports = app;