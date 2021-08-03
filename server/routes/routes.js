const router = require("express").Router();
const multer = require('../middleware/multer-config'); 
const cloudinary = require('../config/cloudinary');
const mongoose = require ("mongoose");
const Memories = require("../models/model");



/*
       *** request to get all memories ***
*/
router.get("/posts",async(req,res) => {
    try{
       const memories = await Memories.find();
       res.json(memories);  
    }catch(err){
        res.status(400).json(`error : ${err}`)
    }
});

/*
       *** request to get One memory ***
*/
router.get("/:id",async(req,res) => {
    try{
       const memory = await Memories.findById(req.params.id);
       res.json(memory);    
    }catch(err){
        res.status(400).json(`error : ${err}`)
    }
});

/*
        *** request to add new memory ***
*/
router.post("/" , multer.single('image'), async (req,res) => {
    try{
        //upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path,{
                                folder: 'memories'
                        });
            let newMemory = new Memories ({
                ...req.body,
                img: {
                    url:result.secure_url,
                    cloudinary_id : result.public_id
                }    
            });
            //save memory 
            await newMemory.save();
            res.json(newMemory);  
    }catch(error){ 
        res.status(400).json(`error : ${error}`)
    }
})

/*
         *** update a memory ***
*/
router.put('/:id' , multer.single('image'), async (req,res) => {
     try{
         
         let memory = await Memories.findById(req.params.id);
         let result;
         // if the user send a new image , we delete the old one and upload the new one to cloudinary
         if(req.file){
            await cloudinary.uploader.destroy(memory.img.cloudinary_id);
            result = await cloudinary.uploader.upload(req.file.path,{
                folder: 'memories'
            });
         }
         
         const modifiedMemory = {
         title : req.body.title || memory.title,
         description : req.body.description,
         date : req.body.date,
         category : req.body.category,
         like : req.body.like,
         img : result? {url:result.secure_url,
                        cloudinary_id : result.public_id }  : memory.img
         }
        memory = await  Memories.findByIdAndUpdate(req.params.id, modifiedMemory, { new: true });
        res.json(memory);    
    } catch(error){ 
        res.status(400).json(`error : ${error}`)
    }
        
})

/* 
           *** delete a memory *** 
*/
router.delete('/:id' ,  multer.single('image'), async (req,res) => {
    try{
        const memoryToDelete = await Memories.findById(req.params.id);

        if(memoryToDelete.img.cloudinary_id){
        //delete image from cloudinary
        await cloudinary.uploader.destroy(memoryToDelete.img.cloudinary_id);
        }

        //delete memory from db
        await memoryToDelete.remove();
        res.status(200).json("done");
    }catch(error){ 
        res.status(400).json(`error : ${error}`)
    }  
})

module.exports = router;