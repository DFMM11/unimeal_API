const express = require('express');
const app = express();
const csv = require('csv-parser');
const fs = require('fs')




app.get('/restaurants', (req, res)=> {
    let restaurants = []
    fs.createReadStream('./restaurants.csv')
    .pipe(csv())
    .on('data', function(data){
        try {
            restaurants.push(data)

            //perform the operation
        }
        catch(err) {
            //error handler
        }
    })
    .on('end',function(){
        console.log(restaurants)
        res.send(restaurants)
    }); 
});

app.get('/meals', (req, res)=> {
    let meals = []
    fs.createReadStream('./meals.csv')
    .pipe(csv())
    .on('data', function(data){
        try {
            meals.push(data)
            //perform the operation
        }
        catch(err) {
            //error handler
        }
    })
    .on('end',function(){
        res.send(meals)
    }); 
});

app.listen(process.env.port||3000, function(){
    console.log('Now Listening for Requests');
})

