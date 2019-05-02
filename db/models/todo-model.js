const {todoSchema}=require('../schema/todo-schema');
const mongoose=require('mongoose');
var todoModel=mongoose.model('todo_db',todoSchema);
module.exports={todoModel}
