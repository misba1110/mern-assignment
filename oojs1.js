let arrays=[
    {
        title:'sunshine',
        author:'misba',
        price:'10',
        rating:'5'

    },
   {
        title:'starshine',
        author:'misbah',
        price:'50',
        rating:'6'
    }
];
console.log('array of books');
for (let array of arrays)
{
    console.log(`${array.title}\t${array.author}\t${array.price}\t${array.rating}`);
}
function authorname(arrays){
    let results=[];
    for(let book of arrays){
        if(book.author=="misba")
        results.push(book.author)
    }
        return results;
    

}
function find(values, matching){
    let results=[];
    for(let value of values ){
        if(matching(value))
            results.push(value);
    }
    return results;
}


let res=authorname(arrays);

console.log(res);


