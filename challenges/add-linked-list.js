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
  if (!l1) return l2;
  if (!l2) return l1;

  let carry = 0;
  let curl1 = l1;
  let curl2 = l2;
  let initVal = curl1.value + curl2.value;
  if (initVal >= 10) {
    carry = 1;
    initVal -= 10;
  }
  let res = new Node(initVal);
  let curNode = res;

  while (curl1.next && curl2.next) {
    curl1 = curl1.next;
    curl2 = curl2.next;
    let value = curl1.value + curl2.value + carry;
    if (value >= 10) {
      carry = 1;
      value -= 10;
    } else {
      carry = 0;
    }

    let node = new Node(value);
    
    curNode.next = node;
    curNode = curNode.next;
  }

  return res;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};

const l1 = new Node(2);
l1.next = new Node(1);
l1.next.next = new Node(5);

const l2 = new Node(5);
l2.next = new Node(9);
l2.next.next = new Node(2);

console.log(addLinkedList(l1, l2))