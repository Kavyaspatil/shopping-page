const express=require("express")
const app=express()
app.use(express.static(__dirname+"/public"))

app.get("/home",function(req,res){
    res.sendFile(__dirname+"/femaledress.html")
})

app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html")
})
app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/contact.html")
})
app.get("/service",function(req,res){
    res.sendFile(__dirname+"/service.html")
})

app.listen(8909,function(err){
    console.log("APP IS RUNNING")
})