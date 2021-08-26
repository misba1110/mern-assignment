
function countDown(max){

return new Promise((resolve,reject)=>{
let count=0;
let iid=setInterval(()=>{
    for(let i=max;i>0;i--)
    count=i;
    return ;
    
if(max<0){
    return reject(new error ("invalid no"));}
else
{
    return resolve(count);
}
},1000);
});
}
countDown(5).then( count=>{ console.log(count);}); 

console.log('count down started…');



    
