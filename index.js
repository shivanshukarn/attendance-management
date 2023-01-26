const express = require('express')
const path = require('path')
const app = express()
const port = 2211

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'))
})
app.get('/studentData.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'studentData.json'))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
