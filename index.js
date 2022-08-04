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
    res.status(200).send({...counter})
})

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})