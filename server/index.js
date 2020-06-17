const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
console.log(path.join(__dirname,'..','client','dist'))
app.use(express.static(path.join(__dirname,'..','client','dist')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))