
let numbers = [3, 5, 10, 2, 8];
let media = numbers.reduce((acc, el) => acc+el, 0)/numbers.length;
console.log(media);


let minornumbers = [];
numbers.forEach(element => {
    if (element < media) {
        minornumbers.push(element);
    }
});
console.log(minornumbers);

let greaternumbers = [];
numbers.forEach(element => {
    if (element > media) {
        greaternumbers.push(element);
    }
});
console.log(greaternumbers);

// TRACCIA 2
let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
array.sort ((a, b) => b - a);
console.log(array);
array.sort ((a, b) => a - b);
console.log(array);
