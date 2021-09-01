const express=require('express');


const getRouter= ()=>{

   // console.log('setting up the routes');
    let router=express.Router();
  //  console.log(router);
    router  
        .route("/login")     
        .get( (request,response)=>{
            console.log('inside login')
            response.send('login');
        })
        .post((request,response)=>{
            let username=request.body.username;
             let password=request.body.password;
             response.send(`username:${username}password:${password}`);
        });
    }
    router  
    .route("/registration")     
    .get( (request,response)=>{
        console.log('inside registration')
        response.send('registration');
    })
    .post((request,response)=>{
        
         
        
    });

