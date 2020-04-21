// Solution to Chapter 4: Data Structures: 
// Exercise: Reversing an array

const reverseArray = (arr) => {
    let newArr =[];
    for(let i = arr.length-1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr;
};

const reverseArrayInPlace = (arr) => {
    for(let i = 0; i<=(arr.length/2)-1; i++){
        let temp = arr[i];
        arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1)-i] = temp;
    }
    return arr;
}

console.log(reverseArray([10,9,8,7,6]));
console.log(reverseArrayInPlace([10,9,8,7,6]));