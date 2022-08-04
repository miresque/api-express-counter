const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
let counter = require("./src/counter.js")

const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

// Retrieve Current Counter
app.get("/counter", (req, res) => {
    res.status(200).send(counter)
})

// Reset the counter to 0
app.delete("/counter", (req, res) => {
    counter.counter = 0
    res.status(200).send(counter)
})

// Increment the counter
app.post("/counter/increment", (req, res) => {
    counter.counter += 1
    res.status(201).send(counter)
})

// Decrement the counter
app.post("/counter/decrement", (req, res) => {
    counter.counter -= 1;
    res.status(201).send(counter)
})

// Double the counter
app.post("/counter/double", (req, res) => {
    counter.counter *= 2;
    res.status(201).send(counter)
})

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})