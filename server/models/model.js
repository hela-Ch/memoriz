const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const memorySchema = new Schema ({
    
    title: {
        type: String,
        required: true
    },
    description: {
        type:String,
        default: ""
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
    img: {

       url:{ type: String},
       cloudinary_id : { type: String}
        
    },
    like:{
       type: Boolean,
       default: false,
    } 
})

const memory = mongoose.model('memory',memorySchema);
module.exports= memory;