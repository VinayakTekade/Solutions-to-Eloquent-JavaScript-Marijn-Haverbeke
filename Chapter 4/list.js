// Solution to Chapter 4: Data Structures: 
// Exercise: A list

const arrayToList = (arr) => {
    let list= null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list
};

// what is rest: list inside the list object ?
//     It creates a property rest in the object literal,
//     and assigns to it the value of the variable list 
//     - before assigning that object to the variable
//     list.Notice that this happens in a loop, so what
//     it does is to take the old value and overwrite it
//     with a new value that references the old value

const listToArray = (list) => {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
};

const prepend = (value, list) => {
    return {
        value,
        rest: list
    };
};

const nth = (list, n) => {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList([1, 2, 3, 4, 5, 6]));
console.log(listToArray(arrayToList([1, 2, 3, 4, 5, 6])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([1, 2, 3, 4, 5, 6]), 1));