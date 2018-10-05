var router = require('express').Router();
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
var os = require('os');

router.use(bodyParser.json())

var namaCPU = os.hostname();
var tipe = os.type();
var platform = os.platform();
var rilis = os.release();
var ramSisa = os.freemem();
var ramTotal = os.totalmem();

var url = 'mongodb://Arsya:qwerty@localhost:27017/dataCPU';

mongoClient.connect(url, (err, db)=>{
    console.log("Anda telah terhubung ke MongoDB!");
});

router.post('/data', (req, res)=>{
    mongoClient.connect(url, (err, db)=>{
        var input = {namacpu: namaCPU,
                        tipe: tipe,
                        platform: platform,
                        rilis: rilis,
                        ramSisa: ramSisa,
                        ramTotal: ramTotal};
        var collection = db.collection('data');
        collection.insert(input, (error, hasil)=>{
            console.log(hasil);
            res.send(hasil);
        });
    });
})

router.get('/data', (req, res)=>{
    mongoClient.connect(url, (err, db)=>{
        var collection = db.collection('data');
        collection.find({}).toArray((error, hasil) => {
            console.log(hasil);
            res.send(hasil);
        });
    });
})

module.exports = router;