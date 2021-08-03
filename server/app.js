const express = require ("express");
const cors = require ("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const router = require ("./routes/routes");
const path = require('path');

const app = express ();

const port = process.env.PORT || 9000;

//connect to mongoose server
mongoose
   .connect(process.env.MONGO_URI,{
     useNewUrlParser: true , 
     useUnifiedTopology: true , 
     useFindAndModify: false 
    })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));


app.use(express.json());
app.use(cors());

//routing
app.use('/', router);
app.use('/posts', router);
app.use('/:id',router);

//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
   //set static folder
   app.use(express.static(path.resolve(__dirname, "./client/build")));
   app.get('*',(req,res) => {
     res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
   });
  }   

//start listening to the server
app.listen(port, () => console.log(`server listening on ${port}`));