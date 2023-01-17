const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

let users = [
    {
      id:1,
      firstname: "Sam",
      lastname: "Naik",
      email: "samnaikwade@gmail.com",
      contact:"9821031313"
    },
    {   
        id:2,
        firstname: "Ram",
        lastname: "Naik",
        email: "ramnaikwade@gmail.com",
        contact:"9821031311"
      }
  ];

app.get('/api/users', function(req, res){
    res.send(users);
});

app.get('/api/users/:id', function(req, res){
    const userid = req.params.id;
    const user = users.filter((item) => userid == item.id);
    res.send(user);
});


app.post('/api/users', function(req, res){
    const data = req.body;
    if(data.firstname == "" ||  data.lastname == "" || data.email == "" || data.phone == ""){
        res.status(400).send({"message": "Bad request"});        
    }
    
    const lastIndex = users.length+1;
    users.push({
        id:lastIndex,
        ...data
    });
    res.status(201).send(data);
});


app.put('/api/users/:id', function(req, res){
    const userid = req.params.id;
    const data = req.body;

    let updated = { id: userid, ...data};
    let newusers = users.filter((item) => userid != item.id);
    newusers.push(updated);
    users = newusers;
    res.send(updated);
});

app.delete('/api/users/:id', function(req, res){
    const userid = req.params.id;
    const newusers = users.filter((item) => userid != item.id);
    users = newusers;
    res.send("deleted");
});

app.get("*", function(req,res){
    res.status(404).send("not found");
})

app.listen(3002, ()=>{
    console.log('server connected at 3002');
})