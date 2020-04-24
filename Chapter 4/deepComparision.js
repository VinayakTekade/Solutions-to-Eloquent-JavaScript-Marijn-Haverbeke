// Solution to Chapter 4: Data Structures: 
// Exercise: A list


const deepEqual = (obj1, obj2) => {
    if(obj1 === obj2) 
        return true;
    
    if(obj1 == null || typeof(obj1) != "object" ||
        obj2 == null || typeof(obj2) != "object")
        return false;

    if(Object.keys(obj1).length != Object.keys(obj2).length)
        return false;

    for(let key of (Object.keys(obj1))) {
        if (!Object.keys(obj2).includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
};

let journal = {isSquirel: true, events: ["Pizza", "Brush", "Peanuts"]};
console.log(deepEqual(journal, [1,2,3,4,5]));
console.log(deepEqual(journal, {isSquirel: false, events: ["Pizza", "Brush", "Dance"]}));
console.log(deepEqual(journal, {randomArray: [1,2,3,4,5]}));
console.log(deepEqual(journal, journal));
console.log(deepEqual(journal, {isSquirel: true, events: ["Pizza", "Brush", "Peanuts"]}));