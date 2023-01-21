const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const auth = require("./routes/auth")
const cors = require('cors')
require('dotenv').config()

const app = express();

app.use(cors())

const urlendcodedparser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlendcodedparser)

app.use('/auth', auth)

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        app.listen(process.env.port, () => console.log(process.env.port))
    })
    .catch(err => console.log(err))