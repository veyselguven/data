// const uncompress = (s) => {
//   //debugger;
//   let numbers = "012345679";
//   let result = "";
//   let i = 0;
//   let j = 0;
//   while (j < s.length) {
//     if (numbers.includes(s[j])) {
//       j++;
//     } else {
//       let count = Number(s.slice(i, j));
//       for (let repeat = 0; repeat < count; repeat++) {
//         result += s[j];
//       }
//       j++;
//       i = j;
//     }
//   }
//   return result;
// };
///////

/////

////
// const compress = (s) => {
//   debugger;
//   let result = [];
//   let i = 0;
//   let j = 0;
//   while (j <= s.length) {
//     if (s[i] == s[j]) {
//       j++;
//     } else {
//       let count = j - i;
//       if (count == 1) {
//         result.push(s[i]);
//       } else {
//         result.push(count, s[i]);
//       }
//       i = j;
//       j++;
//     }
//   }
//   return result.join("");
// };

// console.log(compress("ccatttssss"));

/*
  i
  ccaaatsss
    j
  */
// const anagrams = (s1, s2) => {
//   let obj = {};

//   for (let i = 0; i < s1.length; i++) {
//     obj[s1[i]] = i;
//   }
//   console.log(obj);
//   for (let j = 0; j < s2.length; j++) {
//     if (!(s2[j] in obj)) return false;
//   }
//   return true;
// };

//console.log(anagrams("cats", "tocs"));
//console.log(anagrams("monkeyswrite", "newyorktimes"));
//anagrams("monkeyswrite", "newyorktimes");

// let s1 = "afdsgdb";
// for (let char of s1) {
//   console.log(char);
//   console.log(typeof char);
// }

const pairSum = (numbers, targetSum) => {
  // debugger;
  let hash = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;

    if (complement in hash) {
      return [i, hash[complement]];
    }
    hash[num] = i;
  }
};

console.log(pairSum([4, 7, 9, 2, 5, 1], 5));

let mySet = new Set();

mySet.add(4);

mySet.add(5);
mySet.add(4);

//console.log(mySet); //set{4,5}

const o = { a: 1, b: 2 };
mySet.add(o);
console.log(mySet);

var intersection = (a, b) => {
  let result = [];
  let myset = new Set();

  for (let i = 0; i < a.length; i++) {
    myset.add(a[i]);
  }
  for (let j = 0; j < b.length; j++) {
    if (myset.has(b[j])) {
      result.push(b[j]);
    }
  }
  // console.log(myset)
  return result;
};

intersection([4, 2, 1], [1, 2, 4, 6]);

let x = [2, 3, 5, 5, 2, 6, 8];
let setA = new Set(x);

console.log("setA", setA);

let setB = new Set([3, 4, 5, 7]);

console.log("setB", setB);

const fiveSort = (nums) => {
  // todo
  //time O(n) n=>length
  //O(1) constant space
  let right = nums.length - 1;
  let left = 0;
  while (left <= right) {
    if (nums[right] === 5) {
      right--;
    } else if (nums[left] === 5) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      //console.log("nums",nums);
    } else {
      left++;
    }
  }
  return nums;
};

fiveSort([5, 5, 5, 1, 1, 1, 4]);
