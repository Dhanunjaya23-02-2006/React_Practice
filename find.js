//returns the first element that matches a condition

//Use case:When you need to find a specific item in an array

let numbers=[1,2,3,4,5,6,7];
let firstEven = numbers.find((num) => num%2 == 0);
console.log(firstEven)