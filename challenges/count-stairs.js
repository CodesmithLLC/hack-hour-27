/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {

  function Node(val) {
    this.val = val; 
    this.children = [];
  }

  function Graph() {
    this.nodes = {}
    this.count = 0;
  }

  Graph.prototype.addNodes = function(val) {
    this.nodes[val] = new Node(val);    
    if(!this.nodes[val-1]) this.nodes[val-1] = new Node(val-1);
    if(!this.nodes[val-2]) this.nodes[val-2] = new Node(val-2);
    if(val >= 2)  this.nodes[val].children = [val-1, val-2]
    if(val === 1) this.nodes[val].children = [val-1]
    if(val >= 0)  this.addNodes(val-1);
  }

  Graph.prototype.traverse = function(val) {
    // find all paths to 0 - for each child, spawn a new path
    if(val === 0) this.count++;
    else if (val > 0) this.nodes[val].children.forEach( v => {
      this.traverse(this.nodes[v].val);
    })
    
  }

  g = new Graph;
  g.addNodes(n);
  g.traverse(n);
  return g.count;

}

// testing

// const ggg = countStairs(5)

// console.log(ggg.nodes[5])
// console.log(ggg.nodes[4])
// console.log(ggg.nodes[3])
// console.log(ggg.nodes[2])
// console.log(ggg.nodes[1])
// console.log(ggg.nodes[0])
// console.log(ggg.count)




module.exports = countStairs;
