module.exports=(app)=>{
    const blog=require('../controllers/controllers');
    app.get('/api/blogs',blog.getall);
    app.get('/api/blogs/:blogID',blog.getone);
    app.get('/api/blogs/author/:author',blog.getbyauthor);
    app.get('/api/blogs/title/:title',blog.getbytitle);
    app.get('/api/blogs/desc/:desc',blog.getbydesc);
    app.post('/api/create',blog.create);
    app.put('/api/update/:blogID',blog.updateone);
    app.delete('/api/delete/:blogID',blog.deleteone);
}