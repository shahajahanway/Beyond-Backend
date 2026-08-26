const express = require("express");

const app = express();
app.use(express.json());
let port = 3000;

let users = [];

// create 
app.post("/create", (req,res)=>{
    let body = req.body;

    users.push(body);

    res.send("users saved successfully")
})
// get - read
app.get("/", (req,res)=>{
    res.send(users)
}) 

// Delete
app.delete("/delete/:id",(req,res)=>{
    let {id} = req.params;
    let userData = users.filter((val)=> val.id !== id)
    users = userData
    res.send(userData)

})

// Update
app.put("/update/:id",(req,res)=>{
    let {id} = req.params;
    let {name} = req.body;

    let updateUser = users.map((val)=>
        val.id === id ? {...val , name} : val
)
    res.send(updateUser)

})


app.listen(port, ()=>{
    console.log("Server is running on port 3000");
    
})