const express = require('express');
const app = express();
const path = require('path')


// app.use(express.static(path.join(__dirname , 'public')))
// app.get('/' , (req , res) => {
//     res.sendFile(path.join(__dirname , 'public' , 'index.html'));
// });
// app.get('/about' , (req , res) => {
//     res.sendFile(path.join(__dirname , 'public' , 'about.html'));
// });
let posts = [
    {'id' : 1  , 'title' : 'Post one'} , 
    {'id' : 2  , 'title' : 'Post two'} , 
    {'id' : 3  , 'title' : 'Post three'} , 
    {'id' : 4  , 'title' : 'Post four'} 
]
app.get('/api/posts' , (req , res) => {
    
})
app.listen(8000 , () => console.log(`server is running`))



