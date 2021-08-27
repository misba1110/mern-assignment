


function isPrime(number){
    if(number<2)return false;
    for(let i=2;i<number;i++)  
        if(number%i===0)
            return false;
    return true;
}



function findPrimesPromise(min, max) {

    return new Promise(function (resolve, reject) {
        let lo = min;
        let hi = Math.min(max, min + 1000);  //hi will be min+1000 or max whichever is less
        let primes = [];

        let iid = setInterval(() => {

            if (max <= min) {
                //cb(new Error(`Invalid Range ${min}-${max}`));  //return the Error
                return reject(new Error(`Invalid Range ${min}-${max}`));
            }

            if (lo >= max) { //job is over
                console.log('clearing interval...');
                clearInterval(iid); //stop interval
                //cb(null, primes);  //inform the client about the primes
                return resolve(primes);
            
            }

            for (let i = lo; i < hi; i++) {
                if (isPrime(i))
                    primes.push(i);
            }

            lo = hi;
            hi = Math.min(max, lo + 1000);

         //repeat this after every 100 ms
        }, 10); 
    });
}
function delay( time ){ 

    return  new Promise( (resolve, reject) => { 
    
    setTimeout( () => { 
     resolve(); 
     }, time); 
    
     
    
    }); 
    
     
    
    } 
    
     
//function findAndPrimePrimes(max){
//findPrimesPromise(2,max)
           // .then( primes=>{
            //    console.log( 'Total Primes between 2 and',max,' is ',primes.length);
            
            //})
           // .catch(err=>{
            
           // });
       // }
        //const delay = time => new Promise( resolve => setTimeout(resolve, time));

//findAndPrimePrimes(100);
module.exports={
    findPrimesPromise
}