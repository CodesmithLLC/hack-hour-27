/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {

  // construct your nums

  function traverse(node, all = []) {
    if(!node) return undefined;
    if(node.next === null) {
      all.unshift(node.value.toString());
      return all;
    } else {
      all.unshift(node.value.toString());
      return traverse(node.next, all);
    }
  }

  // add them and make a new num

  const numOne = Number(traverse(l1).join(''));
  const numTwo = Number(traverse(l2).join(''));
  let outputNum = (numOne + numTwo).toString();

  // make a new linked list representing the new num

  const newHead = new Node(Number(outputNum.slice(-1)));
  outputNum = outputNum.slice(0,-1);

  function constructAddedList(node, num) {
    if(!node) return undefined;
    if(num !== '') {
      node.next = new Node(Number(num.slice(-1)));
      constructAddedList(node.next, num.slice(0,-1));
    }
  }

  constructAddedList(newHead, outputNum);

  // return the num

  return newHead;


}

//testing

let aa = new Node(1);
let ab = new Node(3);
let ac = new Node(9);


let ba = new Node(2);
let bb = new Node(4);
let bc = new Node(9);


aa.next = ab
ab.next = ac

ba.next = bb
bb.next = bc


console.log(addLinkedList(aa, ba))

module.exports = {Node: Node, addLinkedList: addLinkedList};
