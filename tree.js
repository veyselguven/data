/*
                        Binary tree’de her bir verinin Node olarak isimlendirildiğini söylemiştik.
                        Her bir Node’un da left ve right olmak üzere child node’ları olabilir.
                        Bu yüzden öncelikle bir Node Sınıfı oluşturalım.
                        */
//   class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
// let abc = new Node("naber");
// console.log(abc);
/*
                  Şimdi Binary Tree’miz için bir sınıf oluşturalım.
                  Bir Binary Tree’de ilk olarak bize root bir değer gerekeceği
                  için bir root property’si tanımlayalım.
                  */
/*
                  Şimdii ekleme,çıkarma, spesifik node’u bulma gibi diğer
                  işlemlerin metodlarını yazmaya başlayabiliriz.
                  Göstereceğim metodların tek çözüm olmadığını unutmayınız :)
                  */
//   class BST {
//     constructor() {
//       this.root = null;
//     }
//     create(value) {
//       const newNode = new Node(value);
//       if (!this.root) {
//         this.root = newNode;
//         return this;
//       } else {
//         this.insertNode(this.root, newNode);
//       }
//       return this;
//     }
//     insertNode(currrentNode, node) {
//       if (node.value < currrentNode.value) {
//         if (currrentNode.left === null) {
//           currrentNode.left = node;
//         } else {
//           this.insertNode(currrentNode.left, node);
//         }
//       } else {
//         if (currrentNode.right === null) {
//           currrentNode.right = node;
//         } else {
//           this.insertNode(currrentNode.right, node);
//         }
//       }
//     }
//   }
/*
                  Binary Tree’ye Node Ekleme — create()
                  create metodumuz ile ağacımıza node’ları eklemeye başlayalım.
                  Ağacın ilk node’u her zaman root node’dur.
                  Eğer bir root yoksa ilk eklenen node’u root’a atarız.
                  */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  create(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      this.insertNode(this.root, newNode);
    }

    return this;
  }

  insertNode(currentNode, node) {
    if (node.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
      } else {
        this.insertNode(currentNode.left, node);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = node;
      } else {
        this.insertNode(currentNode.right, node);
      }
    }
  }
}

const tree = new BST();
tree.create(10).create(21).create(5).create(32);
//  console.log(tree);

// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

var veysel = "aa33aa";
var aysel = "32";

console.log(veysel.indexOf(aysel)); //-1
console.log(veysel.includes(aysel)); //false

var searchInsert = function (nums, target) {
  //    debugger;
  let ind = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    } else if (target > nums[i]) {
      ind = i + 1;
      if (target < nums[i + 1]) {
        return ind;
      }
    }
  }
  return ind;
};
//console.log("search", searchInsert([1, 3, 5, 6], 7));
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let stack = [];
  let res = [];

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

console.log(inorderTraversal([1, null, 2, 3]));

// var inorderTraversal = function (root) {
//   var res = [];
//   helper(root, res);
//   return res;
// };

// var helper = function (root, res) {
//   if (!root) return;
//   if (root.left) helper(root.left, res);
//   res.push(root.val);
//   if (root.right) helper(root.right, res);
// };
