class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    // console.log("current", current);
    // console.log(current.val); // a b c d e c f
    // result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};
/**
 *
 *
 *
 *
 *
 */
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(a);

//console.log(depthFirstValues(a));

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//console.log([a]);
//console.log("popppp", [a].pop().val);
const depthFirstValuesRecursive = (root) => {
  if (!root) return [];
  let leftNode = depthFirstValues(root.left);
  let rightNode = depthFirstValues(root.right);
  return [root.val, ...leftNode, ...rightNode];
};

// O(n) time
//O(1) time
const breadthFirstValues = (root) => {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();

    //console.log(current);
    result.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    //  console.log(current.val);
  }
  return result;
};
/*
const breadthFirstValues = (root) => {
if(!root) return [];
  let leftNode=depthFirstValues(root.left);//b,d,c
  let rightNode=depthFirstValues(root.right); // c,f
  return [root.val,...leftNode,...rightNode]
}
*/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

breadthFirstValues(a);
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
