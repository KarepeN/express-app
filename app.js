const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send(' Hello world ')
  })

app.get('/test', (req, res) => {
    res.send(' Hello world using test ')
  })
app.get('/Nithya', (req, res) => {
    res.send(' Hey,This is Nithya Karepe ')
  })
  
  app.listen(3000, () => {
    console.log(`Listening on port 3000!`)
  })
