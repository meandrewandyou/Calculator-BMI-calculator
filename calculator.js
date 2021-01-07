const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;

    res.send("The result of calculation is " + result);
});

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/BMIcalculator.html")
})

app.post("/bmicalculator", function(req,res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var index = weight/(height*height);
  if(index<18.5){
    res.send("You are skinny")
  }
  else if(index>30){
    res.send("Let's face the truth)")
  }
  else{
    res.send("You are ok")
  }
console.log (index)

})

app.listen(3000, function(){
  console.log("Server started.")
});
