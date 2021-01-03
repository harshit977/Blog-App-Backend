module.exports=(app)=>{
    const blog=require('./controllers');
    app.get('/api/blogs',blog.getall);
    app.post('/api/create',blog.create);
}