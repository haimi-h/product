const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const productRoute = require('./routes/products')
const mongoose = require('mongoose')
app.use(cors())
app.use(bodyParser.json())
app.use('/products', productRoute)
mongoose.connect("mongodb+srv://haimih292:dzn4trt9i0uFomRq@cluster0.fih2ni5.mongodb.net/?retryWrites=true&w=majority").then(data => {
    console.log("connected to DB")
}).catch(error => {
    console.log(error)
})
app.listen(3000)
