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
  let math = [];
  let curr1 = l1
  let curr2 = l2

  while (curr1 && curr2) {
    math.push((curr1.value + curr2.value))
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  while(curr1) {
    math.push(curr1.value)
    curr1 = curr1.next;
  }

  while(curr2) {
    math.push(curr2.value)
    curr2 = curr2.next;
  }
  
  for (let i = 0; i < math.length; i++) {
    if (math[i] >= 10) {
      math[i] = math[i]%10;
      if (!math[i+1]) {
        math[i+1] = 1; 
      } else {
        math[i+1] += 1;
      } 
    }  
  }

  const output = new Node(math[0])
  let current = output;

  for (let i = 1; i < math.length; i++) {
    current.next = new Node(math[i]);
    current = current.next;
  }

  return output
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
