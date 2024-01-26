const express = require('express');
const cors = require('cors');
const itemRoute = require('./routes/items')
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Successfully connected to  mongodb"))
    .catch((err) => console.log(err))

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', itemRoute)

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
    console.log("Server listening on port " + Port)
})