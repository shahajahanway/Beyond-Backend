// let http = require("http");

// let server = http.createServer((req,res)=>{
//    if(req.url === "/users"){
//     res.end("main users mein hun")
//    }
//    if(req.url === "/home"){
//     res.end("main users mein hun")
//    }
//    if(req.url === "/carts"){
//     res.end("main users mein hun")
//    }
// })

// server.listen(3000,()=>{
//     console.log("server is running on port 3000");
    
// });

const express =require('express');

const app = express();

// middleware for accepting data form frontend
app.use(express.json)

app.get('/',(req,res)=>{
    res.send("OK got it")
})
app.get('/products',(req,res)=>{
    res.send([
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  }
 
])
})


app.post('/create',(req,res)=>{
    // create
    console.log(req.body);
    

    res.send('ok post')
})

let port = 3000;

app.listen(3000,()=>{
    console.log(`server is running on port ${port}"`);
    
})

console.log("There are 5 protocols");

/* 
 
1> http =  HyperText Transfer Protocol  
2> https =  HyperText Transfer Protocol Secure
3> ftp = File Transfer Protocol
4> smtp =  simple mail Transfer Protocol
5> web-socket = WebSockets enable two-way, full-duplex communication by establishing a persistent, bidirectional TCP connection between a client and a server.
*/


console.log("Methords");
/*
REST (Representational State Transfer) APIs use standard HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on resources.  

> Representational State Transfer
> Get = Send data
> Post = create/saves something
> Put/Patch = update something
> Delete = delete anything

*/
