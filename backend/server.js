//load env variables
require("dotenv").config();
//import dependencies
const express = require("express");

//create an express app
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/income', (req, res) => {
  res.send('Got a POST request')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})