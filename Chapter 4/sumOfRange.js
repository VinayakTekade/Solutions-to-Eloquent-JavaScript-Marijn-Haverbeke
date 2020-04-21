// Solution to Chapter 4: Data Structures: 
// Exercise: The Sum of a Range

const range = (start, end, step = 1) => {
    let numbers = [];
    if(start<end){
        for(let i = start; i <= end; i += step){
            numbers.push(i);
        }
    } else{
        for(let i = start; i >= end; i += step){
            numbers.push(i);
        }
    }
    
    return numbers
};

const sum = (numbers) => {
    let count = 0;
    for(number of numbers){
        count += number;
    }
    return count
};

console.log(sum(range(1,10)));
console.log(range(1,10,2));
console.log(range(5,2,-1));