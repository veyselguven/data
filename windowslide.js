/* 
Using for finding subarrays in an array that satisfy given conditions
maintain a subset of items as your window and resize and moce that window
within the larger list untill you find a solution
Time complexity:0(n)= linear time
Space complexity:0(1)= constant space
you identfy sliding window problems amongst subarray/substring related questions
*/

// function maxSubArraySum(nums, size) {
//   if (size < 0 || size > nums.length) return null;
//   let currentSum = 0;
//   let maxSumSeen = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     currentSum += nums[i];
//     if (i >= size - 1) {
//       maxSumSeen = Math.max(currentSum, maxSumSeen);
//       currentSum -= nums[i - (size - 1)];
//     }
//   }
//   return maxSumSeen;
// }
function maxSumArr(arr, num) {
  //debugger;
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

// temp 6
// max  6
//
//[1, 2, 3, 5, 4, 8, 6, 2];

const arr1 = [1, 2, 3, 5, 4, 8, 6, 2];

console.log(maxSumArr(arr1, 3));
/*
 *
 *
 *
 */
// function maxSumArr(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     tempSum += arr[i];
//   }
//   //console.log("tempSum", tempSum);
//   maxSum = tempSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     // console.log("forSum", tempSum);
//     maxSum = Math.max(tempSum, maxSum);
//     // console.log("max", maxSum);
//   }
//   return maxSum;
// }
// //console.log(maxSumArr([1, 2, 3, 5, 4, 8, 6, 2], 2));
// //maxSumArr([1, 2, 3, 5, 4, 8, 6, 2], 3);
// /*
//  *
//  *
//  *
//  *
//  *
//  */

// function minSizeSubArray(searchNumber, arr) {
//   let result = Number.MAX_SAFE_INTEGER;
//   let left = 0;
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     while (sum >= searchNumber) {
//       result = Math.min(result, i - left + 1);
//       sum -= arr[left++];
//     }
//   }
//   return result;
// }

// const arr2 = [1, 1, 1, 1, 2, 2, 4];
// //console.log("minsize", minSizeSubArray(4, arr2));

// /*
//  *z
//  *
//  *
//  *
//  */

var minSubArrayLen = function (s, nums) {
  debugger;
  let windowSum = 0;
  let output = Infinity;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    // shrink the window until the windowSum is smaller than s
    while (windowSum >= s) {
      output = Math.min(output, windowEnd - windowStart + 1);
      // subtract the element at the windowStart index
      windowSum -= nums[windowStart];
      // change windowStart to the next element
      windowStart++;
    }
  }
  return output == Infinity ? 0 : output;
};
// //console.log(minSubArrayLen(4, [1, 1, 1, 2, 3, 5, 4]));

// let obj = { a: 1, b: 2, c: 3 };
// // if ("a" in obj) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// let s = "244vbbw";
// console.log(typeof s[0]);

function miniMaxSum(arr) {
  // Write your code here
  let currentSum = 0;
  let maxSum = -Infinity;
  let minSum = Infinity;
  for (let i = 0; i < 4; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  minSum = currentSum;
  for (let i = 4; i < arr.length; i++) {
    currentSum = currentSum - arr[i - 4] + arr[i];
    maxSum = Math.max(currentSum, maxSum);
    minSum = Math.min(currentSum, minSum);
  }

  console.log(minSum, maxSum);
}

miniMaxSum([2, 3, 45, 3, 5, 775, 4]);

let aa = [2, 355, 4, 5, 3, 333, 4];
console.log(aa.sort((a, b) => a - b));
