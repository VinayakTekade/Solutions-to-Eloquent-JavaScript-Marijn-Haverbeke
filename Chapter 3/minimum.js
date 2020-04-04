// Solution to Chapter 3: Functions
// Exercise: Minimum

let min = (numb1 , numb2) => {
    if(numb1 < numb2) return numb1; 
    else return numb2;
};

console.log(`The minimum of 2 and 5 is ${min(2,5)}`);
console.log(`The minimum of 2 and -5 is ${min(2,-5)}`);