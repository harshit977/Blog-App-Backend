const Blog=require('../model/model');

exports.getall=(req,res)=>{
     Blog.find({})
     .then((Blog) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(Blog);
    }, (err) => next(err))
    .catch((err) => next(err));
}

exports.create=(req,res)=>{
    const newblog=new Blog({
        title:req.body.title,
        author:req.body.author,
        desc:req.body.desc
    });
    newblog.save().then((blog)=>{
        res.status(201).json({"msg":"created","blog":blog});
    }).catch((err)=>{
        if(err) return res.status(500).json(err);
    })
}

//find single blog by id
exports.getone=(req,res)=> {
    Blog.findById(req.params.blogID)
    .then((data)=>{
        if(!data) return res.status(404).json({"msg":"Blog Not Found"})
        res.status(200).json(data);
    })
    .catch((err)=>{
        if(err) res.status(500).json(err);
    })
}

//to update a blog

exports.updateone=(req,res)=>{
    if(!req.body.title||!req.body.author||!req.body.desc)
      return res.status(500).json({"msg":"fill all the fields"});
    
    Blog.findByIdAndUpdate(req.params.blogID,{
        title: req.body.title,
        //author: req.body.author,
        desc: req.body.desc 
    },{new: true})
    .then((data)=> {
        if(!data) return res.status(404).json({"msg":"not found"});
        res.status(202).json({
            "msg":"updated",
            "doc":data
        });
    })
    .catch((err)=>{
        if(err) res.status(500).json(err);
    })
}

//to delete a blog

exports.deleteone=(req,res)=>{
    Blog.findByIdAndDelete(req.params.blogID)
    .then((data)=>{
        if(!data) return res.status(404).json({"msg":"Blog not found"});

        res.status(202).json({
            "msg":"deleted",
            "doc":data
        });
    })
    .catch((err)=>{
        if(err) res.status(500).json(err);
    })
}