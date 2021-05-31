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
        //default: "general"
    },
    date: {
        type: String,
    },
    img: {
        type: String,
        
    },
    like:{
       type: Boolean,
       default: false,
    } 
})

const memory = mongoose.model('memory',memorySchema);
module.exports= memory;