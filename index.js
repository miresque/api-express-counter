const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const counters = require("./src/counter.js")

const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
const defaultCounterName = "Default";
const getCounterFor = (counterName) => counters.find(c => c.name === counterName)

// Retrieve Current Default Counter
app.get("/counter", (req, res) => {
    res.status(200).send({ counter: getCounterFor(defaultCounterName).counter})
})

// Reset the counter to 0
app.delete("/counter", (req, res) => {
    getCounterFor(defaultCounterName).counter = 0
    res.status(200).send({ counter: getCounterFor(defaultCounterName).counter})
})

// Increment the counter
app.post("/counter/increment", (req, res) => {
    getCounterFor(defaultCounterName).counter += 1
    res.status(201).send({ counter: getCounterFor(defaultCounterName).counter})
})

// Decrement the counter
app.post("/counter/decrement", (req, res) => {
    getCounterFor(defaultCounterName).counter -= 1;
    res.status(201).send({ counter: getCounterFor(defaultCounterName).counter})
})

// Double the counter
app.post("/counter/double", (req, res) => {
    getCounterFor(defaultCounterName).counter *= 2;
    res.status(201).send({ counter: getCounterFor(defaultCounterName).counter})
})

// Extension 1
// Set the counter to a specific value via a query parameter
app.put("/counter", (req, res) => {
    if (req.query.value) {
        const queryNum = Number(req.query.value);
        getCounterFor(defaultCounterName).counter = queryNum
    }
    res.status(201).send({ counter: getCounterFor(defaultCounterName).counter})
})

// Extension 2
// Retrieve Current Requested Counter via name param
app.get("/counter/:name", (req, res) => {
    const reqName = req.params.name
    res.status(200).send({ counter: getCounterFor(reqName).counter})
})

// Reset the counter to 0 via name param
app.delete("/counter/:name", (req, res) => {
    const reqName = req.params.name
    getCounterFor(reqName).counter = 0
    res.status(200).send({ counter: getCounterFor(reqName).counter})
})

// Increment the counter via name param
app.post("/counter/:name/increment", (req, res) => {
    const reqName = req.params.name
    getCounterFor(reqName).counter += 1
    res.status(201).send({ counter: getCounterFor(reqName).counter})
})

// Decrement the counter via name param
app.post("/counter/:name/decrement", (req, res) => {
    const reqName = req.params.name
    getCounterFor(reqName).counter -= 1;
    res.status(201).send({ counter: getCounterFor(reqName).counter})
})

// Double the counter via name param
app.post("/counter/:name/double", (req, res) => {
    const reqName = req.params.name
    getCounterFor(reqName).counter *= 2;
    res.status(201).send({ counter: getCounterFor(reqName).counter})
})

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})