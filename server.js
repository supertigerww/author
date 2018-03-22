var express = require('express');

var app = express();                

var bodyParser = require('body-parser');

var validate = require('mongoose-validator')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static( __dirname + '/authorapp/dist' ));

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/new_db');

mongoose.Promise = global.Promise;

var namevalidator=[
    validate({
        validator:'isLength',
        arguments:[3,50],
        message: 'Author name should be between {ARGS[0]} and {ARGS[1]} characters',
    })
]



var AuthorSchema = new mongoose.Schema({
    name:{type:String,required:[true,'name can not be blank'],validate:namevalidator},
},{timestamps:true});
mongoose.model('Author',AuthorSchema);
var Author =  mongoose.model('Author')

var x = new Author;


var path = require('path');

app.get('/author',function(req,res){
    Author.find({},function(err,authors){
        if(err){
            console.log(err);
            res.json({message:"Error",errors:err})
        }
        else{
            res.json({data:authors})
        }
    })
})

app.post('/author',function(req,res){
    console.log(req.body);
    let name = req.body.name;
    Author.findOne({name:name},function(err,data){
        if(data){
            console.log(data);
            console.log(err);
            res.json({message:"ExistError",error:"This author already exists"})
        }else{
            var newauthor = new Author();
            newauthor.name = req.body.name;
            newauthor.save(function(err){
                if(err){
                    console.log(err);
                    res.json({message:"Error",errors:err})
                }
                else{
                    res.json({message:"Create Success"})
                }
        })
}
})
})

app.get('/author/:id',function(req,res){
    Author.findOne({_id:req.params.id},function(err,author){
        if(err){
            console.log(err);
            res.json({message:"Error",errors:err})
        }
        else{
            res.json({data:author})
        }
    })
    })

app.put('/author/:id',function(req,res){
    Author.findOne({_id:req.params.id},function(err,author){
        if(err){
            console.log(err);
            res.json({message:"Error",errors:err})
        }
        else{
            author.name=req.body.name;
            author.save(function(err){
                if(err){
                    console.log(err);
                    res.json({message:"Error",errors:err})
                }
                else{
                    res.json({message:"Update Success"})
                }
            })
        }
    })
})

app.delete('/author/:id',function(req,res){
    Author.remove({_id:req.params.id},function(err,author){
        if(err){
            console.log(err);
            res.json({message:"Error",errors:err})
        }
        else{
            res.json({message:"Delete Success"})
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./authorapp/dist/index.html"))
  });



app.listen(8000,function(){
    console.log("listening on port 8000");
})
