require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//routers
const todoRoutes = require("./routes/todoRoute");

app.use('/api/todo',todoRoutes);

app.use('*', (req, res) => {
    res.status(500).json( {message: "Request cannot be found"})
})


//mongoDB connection
mongoose.mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`MongoDB Successfully Connected`);
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = app;