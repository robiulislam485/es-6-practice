// task-1: You have an odd array [1,3,5,7,9] now convert this array into an even array.
const numbers = [1, 3, 5, 7, 9];
// const evenNumber = numbers.map(num => num + 1);
// console.log(evenNumber);

// with for loop
const numbersArray = [1, 3, 5, 7, 9];
let evenNumber = [];
for (let number of numbersArray) {
    evenNumber.push(number + 1);
}
// console.log(evenNumber);

// task-2: You have an array  like [33, 50, 79, 78, 90, 101, 30] now return all the elements which are divisable by 10.

const rawArray = [33, 50, 79, 78, 90, 101, 30];
const divisableByTen = rawArray.filter(num => num % 10 === 0)
// const divisableByTen = rawArray.find(num => num % 10 === 0)
// console.log(divisableByTen);

// task-3: You have an array of object  your task is display the instructor name that has the position senior using filter.
const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
];
const seniorInstructor = instructor.filter(p => p.position === 'Senior');
// console.log(seniorInstructor);

// task-4: you have an array of objects can you find the total sum from here of age.
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 20 }
];
// let sumOfAge = 0;
// for(let element of people){
//     sumOfAge += element.age;
// }
const sumOfAge = people.reduce((p , c) => p + c.age, 0);
console.log(sumOfAge);