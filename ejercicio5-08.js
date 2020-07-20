let vector1 = ["a", "b", "c", "d", "e","f","g","h","i","j","k"];
let vector2 = [];

vector2.push(vector1[vector1.length-1]);
console.log(vector2);
for (let i = 0; i < vector1.length-1; i++) {
    vector2.push(vector1[i]);
}
console.log(vector2);
