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
  let temp = [];
  let ten = false;
  let sum = 0;

  while (l1 && l2) {
    sum = l1.val + l2.val;
    if (ten === true) sum++;
    if (sum >= 10) {
      sum = sum - 10;
      ten = true;
    }
    temp.push(sum)
    l1 = l1.next;
    l2 = l2.next
  }

  while (l1) {
    if (ten === true) {
      l1.val = l1.val++;
    }
    if (l1.val >= 10) {
      l1.val = l1.val - 10;
      ten = true;
    }
    temp.push(l1.val)
    l1 = l1.next;
  }

  while (l2) {
    if (ten === true) {
      l2.val = l2.val++;
    }
    if (l2.val >= 10) {
      l2.val = l2.val - 10;
      ten = true;
    }
    temp.push(l2.val)
    l2 = l2.next;
  }

  let newNode;
  let summedLL = new Node(temp.pop());

  while (temp.length > 0) {
    newNode = new Node(temp.pop());
    newNode.next = summedLL;   
  }

  return newNode;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
