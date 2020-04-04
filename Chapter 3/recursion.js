// Solution to Chapter 3: Functions
// Exercise: Recursion

let isEven = (numb) => {
    if(numb==0) return true;
    else if(numb==1) return false;
    else if (numb<0) return isEven(-numb);
    else return isEven(numb-2);
};

console.log(`Is 50 an even number?\t${isEven(50)}`);
console.log(`Is 75 an even number?\t${isEven(75)}`);
console.log(`Is -1 an even number?\t${isEven(-1)}`);
