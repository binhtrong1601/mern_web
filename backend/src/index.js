const express = require("express");
const  mongoose = require("mongoose")
const dotenv = require("dotenv");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
dotenv.config()

const app = express()
const port = process.env.PORT || 3001
const MONGO_DB = process.env.MONGO_DB

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

routes(app);

mongoose.connect(`${MONGO_DB}`)
.then(()=>{
    console.log("Connect Db Success");
}).catch((err)=>{
    console.log(err);
})


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})