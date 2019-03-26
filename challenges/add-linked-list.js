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
  let output = new Node();
  let p1 = l1, p2 = l2, pOut = output;
  let carry = 0;

  while (p1 || p2 || carry) {
    let sum = carry;
    if (p1) {
      sum += p1.value;
      p1 = p1.next;
    }

    if (p2) {
      sum += p2.value;
      p2 = p2.next;
    }
    
    if (sum >= 10) {
      carry = 1;
      pOut.value = sum % 10;
    } else {
      carry = 0;
      pOut.value = sum;
    }

    if (p1 || p2 || carry) pOut = pOut.next = new Node();
  }

  return output;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};

// const l1 = new Node(2);
// l1.next = new Node(1);
// l1.next.next = new Node(5);
// const l2 = new Node(5);
// l2.next = new Node(9);
// l2.next.next = new Node(4);
// const added = addLinkedList(l1, l2);
// let p = added;
// while (p) {
//   console.log(p.value);
//   p = p.next;
// }