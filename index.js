const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())

const courses= require('./data/course.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses',(req,res)=>{
    res.send(courses);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})