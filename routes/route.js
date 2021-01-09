module.exports=(app)=>{
    const blog=require('../controllers/controllers');
    app.get('/api/blogs',blog.getall);
    app.get('/api/blogs/:blogID',blog.getone);
    app.post('/api/blogs/author',blog.getbyauthor);   
    app.post('/api/blogs/title',blog.getbytitle);  
    app.post('/api/blogs/desc',blog.getbydesc);  
    app.post('/api/create',blog.create);
    app.put('/api/update/:blogID',blog.updateone);
    app.delete('/api/delete/:blogID',blog.deleteone);
}
