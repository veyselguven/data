const breadFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      console.log(neighbor);
      // queue.push(neighbor);
    }
  }
};

const graph = {
  a: ["c", "b "],
  b: ["d"],
  c: ["e"],
  d: ["'f"],
  e: [],
  f: [],
};

breadFirstPrint(graph, "a"); //acbedf
