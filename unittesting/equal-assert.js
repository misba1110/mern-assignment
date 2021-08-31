const assert=require ('assert').strict;
test ("it will pass",()=>{
    console.log("hello world");
});
test ("it will fail",()=>{
    assert.equal(2,3)
});