// Solution to Chapter 2: Program Structure
// Exercise: Chess Board

let str = "",
    height = 8,
    width = 8;

for(let i = 0; i < height; i++){
    for (let j = 0; j < width/2; j++) {
        if(i % 2 == 0) str += " #";
        else str += "# ";
    }
    str += "\n";
}

console.log(str);