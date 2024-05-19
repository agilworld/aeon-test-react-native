
/**
* Two Sum II - Input Array Is Sorted
* 
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/

export const twoNumbers = (numbers, target) => {
  let sorted = []

  for (let key = 0; key < numbers.length; key++) {
    if( sorted.length === 2) break
    for (let i = 0; i < numbers.length; i++) {
      if( i != key ) {
        if( (numbers[i] + numbers[key]) == target ) {
          sorted.push(key+1, i+1)
        }
      } else continue
    }
  }
  return sorted
}


console.log(twoNumbers([4, 11, 17, 25], 21));
console.log(twoNumbers([0, 1, 2, 2, 3, 5], 4));
console.log(twoNumbers([-1, 0], -1));