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
  const output = new Node(null);
  function helper(la, lb, lc, carry = 0){
    if (!(la||lb)) return null;
    lc.next = new Node(la.value + lb.value + carry)
    if (la.value + lb.value >= 10){
      carry++
      lc.next.value = lc.next.value%10
    } else {
      carry = 0
    }
    helper(la.next, lb.next, lc.next, carry)
  }
  helper(l1, l2, output)
  return output.next
}

/*
const ll1 = new Node(2);
ll1.next = new Node(1);
ll1.next.next = new Node(5);
ll1.next.next.next = new Node(5);

const ll2 = new Node(5);
ll2.next = new Node(9);
ll2.next.next = new Node(2);
ll2.next.next.next = new Node(2);

console.log(addLinkedList(ll1, ll2).next)
*/

module.exports = {Node: Node, addLinkedList: addLinkedList};
