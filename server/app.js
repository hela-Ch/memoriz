const express = require ("express");
const cors = require ("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const router = require ("./routes/routes");
const path = require('path');

const app = express ();
app.use(express.json());
app.use(cors());


//connect to mongoose server
mongoose
   .connect(process.env.MONGO_URI,{
     useNewUrlParser: true , 
     useUnifiedTopology: true , 
     useFindAndModify: false 
    })
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));


//routing
app.use('/', router);
app.use('/posts', router);
app.use('/:id',router);


//start listening to the server
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`server listening on ${port}`));