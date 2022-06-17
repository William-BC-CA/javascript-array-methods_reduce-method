// reduce() method

// old way of performing an operation like sum:
// const numbers = [1, -1, 2, 3];
const numbers = [1, -1, , 2, ,3];
console.log(numbers);
// let sum = 0;
// for(let n of numbers){
//     sum+=n;
// };
// console.log(sum);

// use reduce() method to perform same operation
// const sum = numbers.reduce( (accumulator, currentValue) =>  {
//     return accumulator + currentValue;
// }, 0 )

// console.log(sum);

// Behind the scenes
// acc = 0, c = 1 => acc = 1
// acc = 1, c = -1 => acc = 0
// acc = 0, c = 2 => acc = 2
// acc = 2, c = 3 => acc = 5

// shortened version -- no initial value for accumulator
// const sum = numbers.reduce( (accumulator, currentValue) =>  {
//     return accumulator + currentValue;
// } )

// console.log(sum);
// acc = 1, c = -1 => acc = 0
// acc = 0, c = 2 => acc = 2
// acc = 2, c = 3 => acc = 5
// even shorter version
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(numbers);
console.log(sum);
// ! If there are empty items in the array, it will just skip