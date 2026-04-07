//returns the index of the first matching element

//Use case:When you need the position of an item,not the value

let numbers=[1,2,3,4,5,6];
let index=numbers.findIndex((num) => num%2 === 0);
console.log(index);