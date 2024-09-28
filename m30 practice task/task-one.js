// Practice problem -1
// task-1: write an arrow function that will take 3 parameters ,will multiply the parameters and will return the result.
const add = (a, b, c) => {
    const result = a * b * c;
    return result;
}
// console.log(add(2,3,4));
// task-2: write the following sentence in three lines and print the results: I am a devloper. I love to code. I love to eat biriyani.
const firstOne = 'I am a devloper.';
const secondOne = 'I love to code.';
const thirdOne = 'I love to eat biriyani.';
const result = `
${firstOne} ${secondOne} ${thirdOne}`;
// console.log(result);
// task:3 Write an arrow function that will take 2 parameters one parameters will come from you and the other parameter will be a 
// default parameter. add these two parameter and return the result. 
const add2 = (x, y = 5) => {
    const result = x + y;
    return result;
}
// console.log(add2(7));
// Practice problem -2
// Task-1: Write an arraow function where it will do the following ...
// It will take an array where the array elements will be the name of your friends.
// Check if the length of each elements is even push elements with even length to a new array and return the result.
const myFriends = (friends) => {
    let evenFriends = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            evenFriends.push(friend);
        };
    };
    return evenFriends;
}
const myArray = ['Jobayer', 'Rahad', 'Tanvir', 'Shakil', 'Hridoy', 'Ontor']
// console.log(myFriends(myArray));
// Practice problem -3
//  Write an arrow function where it will do the following...
//  square each array element 
// Calculate the sum of the squared elements 
// Return the average of the sum of squared elements
const squareArray = (nums) => {
    let sum = 0;
    let average = 0;
    for (const num of nums) {
        const squareNumber = num ** 2;
        sum = sum + squareNumber;
        average = sum / nums.length;
    }
    return average;
}
const number = [2, 3, 4, 5];
// console.log(squareArray(number));
// Practice problem -4
// write an arrow function where it will do the followings
// it will take two array inputs
// Combine the two arrays and assign them in a new array
// Find the maximum number from the new array and return the result
const twoArrays = (array1, array2) => {
    const combineArray = [...array1, ...array2];
    return Math.max(...combineArray);
}
const firstArray = [2, 4, 6, 3];
const secondArray = [12, 14, 16, 13];
// console.log(twoArrays(firstArray, secondArray));