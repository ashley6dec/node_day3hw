/**
 * Calculates the sum of elements in an array.
 * @param {Array<number>} arr - The input array of numbers.
 * @returns {number} The sum of all elements in the array.
 */
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  /**
   * Removes duplicate elements from an array.
   * @param {Array<any>} arr - The input array.
   * @returns {Array<any>} An array with duplicate elements removed.
   */
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  /**
   * Filters array elements based on a provided predicate function.
   * @param {Array<any>} arr - The input array to filter.
   * @param {Function} predicate - The function used to filter elements.
   * @returns {Array<any>} The filtered array.
   */
  function filter(arr, predicate) {
    return arr.filter(predicate);
  }
  
  /**
   * Sorts an array using a comparator function.
   * @param {Array<any>} arr - The input array to sort.
   * @param {Function} [comparator=(a, b) => a - b] - The comparator function for sorting.
   * @returns {Array<any>} The sorted array.
   */
  function sort(arr, comparator = (a, b) => a - b) {
    return arr.slice().sort(comparator);
  }
  
  /**
   * Maps each element of an array to a new value using a transformation function.
   * @param {Array<any>} arr - The input array to map.
   * @param {Function} transformFn - The transformation function.
   * @returns {Array<any>} The mapped array.
   */
  function map(arr, transformFn) {
    return arr.map(transformFn);
  }
  
  /**
   * Finds the maximum value in an array.
   * @param {Array<number>} arr - The input array of numbers.
   * @returns {number} The maximum value in the array.
   */
  function max(arr) {
    return Math.max(...arr);
  }
  
  /**
   * Finds the minimum value in an array.
   * @param {Array<number>} arr - The input array of numbers.
   * @returns {number} The minimum value in the array.
   */
  function min(arr) {
    return Math.min(...arr);
  }
  
  /**
   * Partitions an array into two based on a predicate function.
   * @param {Array<any>} arr - The input array to partition.
   * @param {Function} predicate - The predicate function for partitioning.
   * @returns {Array<Array<any>>} An array containing two arrays based on the partitioning.
   */
  function partition(arr, predicate) {
    return arr.reduce(
      ([pass, fail], elem) => (predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]]),
      [[], []]
    );
  }
  
  /**
   * Flattens nested arrays into a single array.
   * @param {Array<any>} arr - The input array with nested arrays.
   * @returns {Array<any>} The flattened array.
   */
  function flatten(arr) {
    return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);
  }
  
  /**
   * Groups array elements based on a key function.
   * @param {Array<any>} arr - The input array to group.
   * @param {Function} keyFn - The function to extract the key for grouping.
   * @returns {Object} An object with keys as groups and values as arrays of elements.
   */
  function groupBy(arr, keyFn) {
    return arr.reduce((acc, curr) => {
      const key = keyFn(curr);
      acc[key] = [...(acc[key] || []), curr];
      return acc;
    }, {});
  }
  
  /**
   * Shuffles the elements of an array randomly.
   * @param {Array<any>} arr - The input array to shuffle.
   * @returns {Array<any>} The shuffled array.
   */
  function shuffle(arr) {
    return arr.slice().sort(() => Math.random() - 0.5);
  }


  module.exports= {
    sum,
    removeDuplicates,
    filter,
    sort,
    map,
    max,
    min,
    partition,
    flatten,
    groupBy,
    shuffle
  }

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