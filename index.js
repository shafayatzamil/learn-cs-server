const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())

const courses= require('./data/course-module.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses',(req,res)=>{
    res.send(courses);
})

app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const getSingleCouses = courses?.find((p) => p.id == id);
    console.log(getSingleCouses);
    // if (!getSingleItem) {
    //   res.send("Porduct khuje pai nai");
    // }
    res.send(getSingleItem);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})