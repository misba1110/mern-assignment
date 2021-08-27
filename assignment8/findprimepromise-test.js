const { expect } = require("@jest/globals");
const { findPrimesPromise } = require("../src/libs/assignment8.2");


describe('findPrimesPromise tests',()=>{
    it('should return 25 primes under 100',()=>{

        findPrimesPromise(2,100, (error,primes)=>{

            //test was declared passed long before we reach here
            expect(error).toBeNull();
            expect(primes.length).toBe(25);

        });
    
            
    });
    

    

    
});