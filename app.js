var express = require('express');
var routermongo = require('./route/route_mongodb')

app.use(routermongo)

var app = express();

app.get('/', (req,res)=>{
    res.send('Express ~  MongoDB')
})

app.listen(7654, ()=>{
    console.log('Server aktif @port 7654')
});