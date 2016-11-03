"use strict"

const express = require('express')
const bodyParser = require('body-parser');

const person = require('./data.json') // read a json file
const app = express() // initialize express
app.use(bodyParser.json()); // for parsing application/json

let car = []

app.get('/', (req, res) =>
  res.send('Hello World!')
)

app.get('/person', (req, res) =>
  res.send(person)  // responds with the json object
)

app.post('/cars', (req, res) => {
  car.push(req.body) // put the body of the POST request in the car array
  res.send("new car set")
})

app.get('/cars', (req, res) => {
  res.send(car) // return all cars.
})

app.get('/cars/:index', (req, res) => {
  res.send(car[req.params.index]) // return the care at the index in the array
})

app.get('/users/:userId', (req, res) => {
  console.log('userId: ' + req.params.userId) // print url parameter
  res.send(req.params) // returns the parameters as a json object
})

// the json body needs to contain the 'address' key on the root level
app.post('/house', (req, res) => {
  let address = req.body.address
  console.log('the house address: ' + address) // print url parameter
  res.send({
    "operation": "CREATE HOUSE",
    "address": address,
    "greet": getHei(),
    "number": 3+2+3+4/22
  })
})

function getHei() {
  return "hallo"
}

app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)