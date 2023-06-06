const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const UserRouter = require("./routes/user.routes");



const app = express();

app.use(cors());
app.use(express.json());
const uri = process.env.MONGODB_URL;
mongoose.set('strictQuery', true);
mongoose.connect(uri, err => {
    if (err) throw err;
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose database econnection established successfully")
})


app.use('/users', UserRouter);




app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(1234, () => {
    console.log("server running on port 1234")
});