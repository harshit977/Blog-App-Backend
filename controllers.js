const Blog=require('./model');

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