const express = require("express");
const app = express();
require("dotenv").config();

const notRoute = require("./routes/notlar")


//loglama
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use(express.json());

app.use("/api/notlar", notRoute);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("server is running on port : http://localhost:" + PORT);
})