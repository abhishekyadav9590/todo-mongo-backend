var mongoose=require('mongoose');
var todoSchema=new mongoose.Schema({
    text: String,
    isDone:Boolean,

});

module.exports={
    todoSchema
}