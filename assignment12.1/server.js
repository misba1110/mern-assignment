const express=require ('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/public/index.html');

});
app.get('/login',(request,response)=>{
    response.sendFile(__dirname+'/public/login.html');

});
app.post('/login',(request,response)=>{
    let username=request.body.username;
    let password=request.body.password;
    response.send(`username:${username}password:${password}`);

});
const port=7000;
app.listen(port,()=>console.log(`server started at${port}`));