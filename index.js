function hasTargetSum(array, target) {
  // Write your algorithm here
  let arraySize = array.length
  for (let i = 0; i < arraySize - 1; i++) {
    for (let j = i + 1; j < arraySize; j++) {
      if((array[i] + array[j]) === target) {
        return true
      } 
    }
  }
  return false
}
console.log(hasTargetSum([5, 4, 3, 5], 1))


/* 
  Write the Big O time complexity of your function here
  the Big 0 time complexity is (n * n) because its a nested loop
  it will take Quadratic time O(n^2)
*/

/* 
  Add your pseudocode here

  for i in array
    for j in array
      if array[i] plus array [j] is equal to target
        return true
        else false
*/

/*
  create a variable that contains the size of the array
  iterate through the array as long as its less than the size of the array
  and if there is a pair that the sum results into the target, it should return true
  otherwise it should return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
