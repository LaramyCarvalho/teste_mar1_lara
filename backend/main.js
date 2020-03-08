const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://<user>:<password>@cluster0-aizip.mongodb.net/<database-name>?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

require('./src/models/Cadastro');

app.use("/", require("./src/routes"));

app.listen(3001);
