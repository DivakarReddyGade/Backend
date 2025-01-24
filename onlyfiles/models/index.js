const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.get('/get-user-data',(req,res) => {
    res.send('data get success');
})

app.post('/add-user', (req,res) => {
    const user = req.body;
    console.log(user);
    res.send('user added');
})

app.listen(7000,() => {
    console.log('my server running at port 7000')
});

const mongoDbUrl = "mongodb+srv://divakarqz2019gade:Divakar@2003@cluster0.ibtck.mongodb.net/"
mongoose.connect(mongoDbUrl)
.then(() => {
    console.log("DB is connected successfully");
}).catch((er) => {
    console.log(er)
})