const express = require ("express");
const cors = require ("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const router = require ("./routes/routes");
const app = express ();
const path = require('path');




const port = process.env.PORT || 9000;
//app.use(bodyParser.urlencoded({
  //extended:true
//}));

//connect to mongoose server
//"mongodb://localhost:27017/MemoriesDb"
mongoose
   .connect(process.env.MONGO_URI,{
     useNewUrlParser: true , 
     useUnifiedTopology: true , 
     useFindAndModify: false 
    })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));
/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("connecté à mongoose")
});*/


//app.use("/uploads", express.static(path.join(__dirname,"uploads")));
app.use(express.json());
app.use(cors());

app.use('/', router);
app.use('/posts', router);
app.use('/:id',router);

//start listening to the server
app.listen(port, () => console.log(`server listening on ${port}`));