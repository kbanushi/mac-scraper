const PORT =  process.env.PORT || 8000

const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
app.use(cors())

app.use(express.static(path.join(__dirname, "client")))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
})

app.listen(PORT, () => console.log(PORT))
