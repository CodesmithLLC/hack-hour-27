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
  // I'll want two pointers - one for each LL
  // and a remainder storage, to hold remainders as I move through the LL
  const output = {};
  // the pointers
  let p1 = l1;
  let p2 = l2;
  let pOutput = output;
  let remainder = 0;



  // I'll use a while loop to iterate through the LL, first assuming they are both the same length
  while (p1 !== null) {
    // perform addition with remainder or nah
    if (remainder > 0) {
      pOutput.value = p1.value + p2.value + remainder;
      remainder = 0;
    } else {
      pOutput.value = p1.value + p2.value;
    }

    // detect and store remainder
    if (pOutput.value > 9) {
      let digitStr = pOutput.value.toString();
      remainder = parseInt(digitStr[0]);
      pOutput.value = parseInt(digitStr[1]);
    }


    // Increment to the next step
    if (p1.next !== null) {
      pOutput.next = {};
      pOutput = pOutput.next;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  pOutput.next = null;
  return output;
}

// const ll1 = { value: 2, next: { value: 1, next: { value: 5, next: null } } }
// const ll2 = { value: 5, next: { value: 9, next: { value: 2, next: null } } }

// console.log(addLinkedList(ll1, ll2));

module.exports = { Node: Node, addLinkedList: addLinkedList };
