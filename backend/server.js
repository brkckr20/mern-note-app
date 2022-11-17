const express = require("express");
var cors = require('cors')
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

app.use(cors())

const notRoute = require("./routes/notlar")

//db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Veritabanı bağlantısı başarılı")
        app.listen(PORT, () => {
            console.log("server is running on port : http://localhost:" + PORT);
        });
    })
    .catch(err => {
        console.log(err)
    })

//loglama
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use(express.json());

app.use("/api/notlar", notRoute);


const PORT = process.env.PORT || 4000;
