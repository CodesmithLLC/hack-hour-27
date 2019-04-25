// Given a 2D board and a word, find if the word exists in the grid.
// ​
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
// board =
// [
//  ['A','B','C','E'],
//  ['S','F','C','S'],
//  ['A','D','E','E']
// ]
// ​
// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

const wordSearch = (arrayBoard, word) => {

  let output = false;

  // represent the board as a 1D array
  const big = arrayBoard.reduce( (a,c) => a.concat(c) );
  const width = arrayBoard.length+1;

  function Graph() {
    this.nodes = {}
  }

  function Node(val) {
    this.val = val;
    this.children = [];
    this.used = false;
  }

  // make a graph

  const g = new Graph();

  big.forEach( (val, i) => {
    // check if the node exists
    // if not, make it
    if(!g.nodes[i]) g.nodes[i] = new Node(val);

    // populate the child array of our node

    // first, check if you can move in a cardinal direction
    // if so, check if the node exists
    // if it doesn't, make it
    // then, set the node as a possible move

    // check left
    if(i%width-1 >= 0) {
      if(!g.nodes[i-1]) g.nodes[i-1] = new Node(big[i-1]); 
      g.nodes[i].children.push(g.nodes[i-1])
    }
    // check right
    if(i%width+1 < big.length) {
      if(!g.nodes[i+1]) g.nodes[i+1] = new Node(big[i+1]); 
      g.nodes[i].children.push(g.nodes[i+1])
    }
    // check up
    if(i+width < big.length) {
      if(!g.nodes[i+width]) g.nodes[i+width] = new Node(big[i+width]); 
      g.nodes[i].children.push(g.nodes[i+width])
    }
    // check down
    if(i-width >= 0) {
      if(!g.nodes[i-width]) g.nodes[i-width] = new Node(big[i-width]); 
      g.nodes[i].children.push(g.nodes[i-width])
    }
        
  })

  const traverse = (word, node) => {
    if(word === '') output = true;
    node.used = true;
    node.children.forEach( child => {
      if(child.val === word[0] && child.used === false) traverse(word.slice(1), child);
    })
  }

  // find all possible starting points for the given  word
  // then, attempt to traverse the word

  Object.values(g.nodes).forEach( node => {
    if(node.val === word[0]) {
      // before we start a new traversal, reset the 'used' flags on all the nodes
      Object.values(g.nodes).forEach( node => node.used = false );
      traverse(word.slice(1), node);
    }
  });

  return output;

}

// tests

const board =
[
 ['A','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']
]

console.log(wordSearch(board, 'X')) // false
console.log(wordSearch(board, 'ABC')) // true
console.log(wordSearch(board,'ASADEESECCFB')) // true
console.log(wordSearch(board,'ASADEESECCFBA')) // false