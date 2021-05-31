const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require ("path");
const mongoose = require ("mongoose");
const Memories = require("../models/model");

const storage = multer.diskStorage({
   destination: function(req,file,cb){
        cb(null,'uploads/');
    },
   
    filename :function(req,file,cb){
      cb(null,file.originalname);

    }});
const upload = multer({storage: storage});


// request get all memories
router.get("/posts",async(req,res) => {
    try{
       const memories = await Memories.find()
       const data = res.send(memories);
       return data;
    }catch(err){res.status(400).json(`error : ${err}`)};
});

//request add new memory
router.post("/" , upload.single('img'),async (req,res) => {

    console.log(req.file);
    const {title,description,category,date,like} = req.body;
    const img = req.file.filename;
    console.log(img);
    let newMemory = new Memories ({title,description,category,date,img,like});
   try{
     newMemory = await newMemory.save();
     const data = res.send(newMemory);
     console.log(data);
     return data ;
   }catch(err){ res.status(400).json(`error : ${err}`)};


});

//upload a memory
router.put('/:id' , upload.single('img'), async (req,res) => {
     try{
         console.log(req);
   
       let memory = await Memories.findOne({ _id :req.params.id})
          
                memory.title = req.body.title,
                memory.description = req.body.description,
                memory.like = req.body.like,
                memory.date =req.body.date,
                memory.img = req.body.img,
            console.log(memory.image);
         
       const memoryModified = await memory.save();
       console.log(memoryModified);
       const data = res.send(memoryModified);
          console.log(data);
       return data ;
    }catch(err){res.status(400).json(`error : ${err}`)};
        
})

//delete a memory
router.delete('/:id' , upload.single('img'), async (req,res) => {
    try{

    const deleteMem = await Memories.findByIdAndRemove(req.params.id);
    console.log(deleteMem);
    res.status(200).json("done");
   
    }catch(err){ res.status(400).json(`error : ${err}`)};
   
})



module.exports = router;