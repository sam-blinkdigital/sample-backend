const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const movies = [
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    {
        name: "Avatar",
        rating: 8,
        release_date: "10/1/2022",
    },
    
  ];

app.get('/api/movies', function(req, res){
    res.send(movies);
});

app.listen(3001, ()=>{
    console.log('server connected at 3001');
})