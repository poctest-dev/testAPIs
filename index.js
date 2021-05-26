const express=require("express")
const app=express();

var obj=[
    {
        id:"1",
        name:"Abhijit",
        subscription:["LiveSafe","WebBoost"]
    },
    {
        id:"2",
        name:"Prasun",
        subscription:["AppBoost","WebBoost","Mobile_Mvision"]
    }
]
app.set("view engine","hbs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.render("home")
    
})
app.post("/url",function(req,res){
    var i;
    for( i=0;i<obj.length;i++)
    {
        if(obj[i].id==req.body.username)
        {
            res.json(obj[i])
            break;
        }
    }
    if(i==obj.length)
    res.json("not found")
})
app.listen(3000,function(){
    console.log("server is running")
})