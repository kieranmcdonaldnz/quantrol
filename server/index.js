let express = require('express')
let stringifiedData = require('./data.json')

let app = express()

const PORT = 1234

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/controls', (req, res) => {
  res.header('Content-Type', 'application/json')
  setTimeout(() => {
    res.send(stringifiedData)
  }, 1000)
})

app.listen(PORT, () => {
  console.log(`Mock API is listening on port ${PORT}`)
})
