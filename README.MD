# day3_hw library 
### This libraray can be used with any JS based Frontend as well as Node.js backend to get some utility in Binary Search 

## Libraray Usage

const {sum,
    removeDuplicates,
    filter,
    sort,
    map,
    max,
    min,
    partition,
    flatten,
    groupBy,
    shuffle} = require("day3_hw")

const numbers = [1, 2, 3, 4, 5, 2, 3];

console.log(sum(numbers)); // Output: 20
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
console.log(filter(numbers, (num) => num > 3)); // Output: [4, 5]
console.log(sort(numbers)); // Output: [1, 2, 2, 3, 3, 4, 5]
console.log(map(numbers, (num) => num * 2)); // Output: [2, 4, 6, 8, 10, 4, 6]
console.log(max(numbers)); // Output: 5
console.log(min(numbers)); // Output: 1
console.log(partition(numbers, (num) => num > 3)); // Output: [[4, 5], [1, 2, 2, 3, 3]]
console.log(flatten([[1, 2], [3, [4, 5]]])); // Output: [1, 2, 3, 4, 5]
console.log(groupBy(numbers, (num) => num % 2 === 0 ? 'even' : 'odd')); // Output: { even: [2, 2, 4], odd: [1, 3, 3, 5] }
console.log(shuffle(numbers)); // Output: [2, 4, 1, 3, 5, 3, 2] (or any other shuffled order)