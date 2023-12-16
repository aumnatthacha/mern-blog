const express = require("express")
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("./models.js/User");
const jwt = require("jsonwebtoken");

//Environment Variables
require("dotenv").config();

//Express Setup
const app = express();

//Middleware Setup
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());


//Database Connect
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL);

//Home Route
app.get("/", (req, res) => {
    res.send("<h1>This is a RESTful API FOR SE NPRU Blog</h1>")
})


//User Register
const salt = bcrypt.genSaltSync(10);
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});


//User login
const secret = process.env.SECRET
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const isMatchedPassword = bcrypt.compareSync(password, userDoc.password);
    if (isMatchedPassword) {
        //logged in
        jwt.sign({ username, id: userDoc }, secret, {}, (err, token) => {
            if (err) throw err;
            //Save data in cookie
            res.cookie("token", token).json({
                id: userDoc.id,
                username,
            });
        });
    } else {
        res.status(400).json("wrong credentials")
    }
});

//logout
app.post("/logout", (req, res) => {
    res.cookie("token", "").json("ok");
});


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
})