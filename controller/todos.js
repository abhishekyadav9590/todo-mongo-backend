var express=require('express');
var router=express.Router();
const {getAll,saveTodo,deleteTodo,updateTodo}=require('../services/todo-services');

//get users listing
router.get('/',(req,res,next)=>{
    getAll().then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log("error occurred : "+err);
    })
});
router.post('/',(req,res,next)=>{
    console.log("about to add todo:"+JSON.stringify(req.body))

    saveTodo(req.body)
        .then(result=>{
        res.append("Content-Type","application/json");
        res.end(JSON.stringify(result));
    }).catch(err=>{
        console.log("error occurred post:"+err);
    })
});
router.delete('/',(req,res,next)=>{
    console.log('trying to delete :'+req.query.id);
    deleteTodo(req.query.id).then(result=>{
        //console.info('result in delete:'+JSON.stringify(result));
        res.send(result);
    }).catch(err=>{
        console.log("error in delete block "+err);
    })
});
router.patch('/',(req,res,next)=>{
    console.log("update : "+req.body);
    updateTodo(req.body.id,req.body).then(result=>{
        console.log("after updating :"+JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
});

module.exports=router;
