const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

const courses = require("./data/course-module.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const getSingleCourses = courses?.find((p) => p.id == id);
  if (!getSingleCourses) {
    res.send("Porduct khuje pai nai");
  }
  res.send(getSingleCourses);
});

app.get("/category/:name",(req,res)=>{
  const name =req.params.name;
  console.log(name);
  const getCategory = courses?.filter((p) => p.category == name);
  res.send(getCategory); 

  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
