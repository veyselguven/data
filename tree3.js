var search = function (nums, target) {
  // debugger;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));

//////////////////
/////////////////
////////////////

function guess(num) {
  return num;
}

var guessNumber = function (n) {
  // debugger;
  let left = 1,
    right = n;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    const current = guess(mid);
    if (current === 0) return mid;
    if (current === -1) right = mid;
    else left = mid + 1;
  }
  return left;
};

//console.log(guess(10));
console.log(guessNumber(10));

// console.log("Pickmiddle", Math.floor((10 - 1) / 2));
//find number if its has sqrt
var isPerfect = function (num) {
  let left = 1;
  let right = num;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === num) return true;
    else if (num > mid * mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

console.log("isperfect", isPerfect(9));
