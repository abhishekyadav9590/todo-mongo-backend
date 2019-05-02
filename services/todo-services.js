const {todoModel}=require('../db/models/todo-model');

const getAll=()=>{
    return todoModel.find({});
}

const saveTodo=(todo)=>{
    let newTodo=todoModel(todo);
    return newTodo.save();
}
const deleteTodo=(id)=>{
    return todoModel.deleteOne({_id:id});
}

const updateTodo=(id,data)=>{
    return todoModel.updateOne({_id:id},data);
}
const updateStatus=(id)=>{
    return todoModel.updateOne({_id:id});
}
module.exports={
    getAll,
    saveTodo,
    deleteTodo,
    updateTodo
}