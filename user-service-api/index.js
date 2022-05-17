const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => res.json([
  {
    name: 'Lawrence',
    email: 'Lubs@gmail.com',
  
  },
  {
    name: 'Lubwama',
    email: 'Lawrencejews@gmail.com',
  
  },
  {
    name: 'Lubuusi',
    email: 'Lubuusijews@gmail.com',
  
  },
  {
    name: 'Jews',
    email: 'Lubjews@gmail.com',
  
  },
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})