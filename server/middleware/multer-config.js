const multer = require ('multer');
const path = require("path");
/*const storage = multer.diskStorage({
     destination:(req,file,callback)=>{
            callback(null,'uploads')
     },
     filename:(req,file,callback)=>{
         const name = file.originalname.split(' ').join('_');
         const extension = file.mimetype.split('/')[1];
         callback(null,name+Date.now()+'.'+extension)

     }
})*/
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname); 
      if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext!== ".gif") {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, true);
    },
  });

