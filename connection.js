
var db_url=require('./database_url/database_url');
const mongoose = require("mongoose");

mongoose.connect(db_url.url,{useNewUrlParser:true});

var db=mongoose.connection;

var connect=()=>{
    db.on('error',console.error.bind(console,'connection error'));
    db.once('open',()=>{
        console.log('connected');
    });
}
module.exports={connect};