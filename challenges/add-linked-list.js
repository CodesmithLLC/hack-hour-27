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
  //strat: create new LL. Find the number formed by each LL. Add the two numbers. Break the sum number down into a LL and return the head.
  let num1 = '';
  let pointer1 = l1;
  let pointer2 = l2;
  let num2 = '';
  while (pointer1) {
    num1 = JSON.stringify(pointer1.value) + num1
    pointer1 = pointer1.next;
  }
  num1 = Number(num1);
  console.log('num1:', num1);
  while (pointer2) {
    num2 = JSON.stringify(pointer2.value) + num2
    pointer2 = pointer2.next;
  }
  num2 = Number(num2);
  console.log('num2:', num2);

  let sum = num1 + num2;
  console.log('sum:', sum)
  let sumArray = JSON.stringify(sum).split('').reverse().map(elem => Number(elem));
  console.log('sumArray:', sumArray);

  let head = new Node(sumArray[0]);
  if (sumArray.length === 1) return head;

  for (let i = 1; i < sumArray.length; i++){
    addToLL(head, sumArray[i])
  }

  return head;
}

function addToLL(LLHead, value) {
  let newNode = new Node(value);
  let tail = LLHead;
  while (tail.next !== null){
    tail = tail.next;
  }
  if(LLHead === null){
    LLHead = newNode;
  }
  else{
    tail.next = newNode;
  }
};

// let l1 = new Node(1)
// l1.next = new Node(2);
// l1.next.next = new Node(3);
// let l2 = new Node(4)
// l2.next = new Node(5);
// l2.next.next = new Node(6);
// console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
