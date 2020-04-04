// Solution to Chapter 3: Functions
// Exercise: Counting Beans

let countChar = (str, ch) => {
    let count = 0;
    for(let i=0;i<str.length; i++) if(str[i] == ch) count++;   
    return count;
};

let countBs = (str) => {
    return countChar(str, "B");
};

console.log(countChar("Big Billion Dollars", "l"));
console.log(countBs("Big Billion Dollars"));