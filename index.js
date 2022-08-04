const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})