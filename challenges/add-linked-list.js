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


// Jaime's solution

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

// // iterative
// function addLinkedList(l1, l2) {
//   let cur = new Node(null); // will be the returned list, val doesn't matter
//   const head = cur; // keep track of the head to ultimately return its .next
//   let sum = 0;
//   while (l1 || l2 || sum) { // we check sum in case of carryovers from end of lists
//     if (l1) {
//       sum += l1.value;
//       l1 = l1.next;
//     }
//     if (l2) {
//       sum += l2.value;
//       l2 = l2.next;
//     }
//     // add the new Node to the returned list, modulo 10 will give us
//     // either the number itself or the number minus 10 if > 9
//     cur.next = new Node(sum % 10); 
//     cur = cur.next; // move to next digit in the list we're making
//     sum = sum > 9 ? 1 : 0; // start the next iteration with a sum of 1 if we need to carry a 1
//   }
//   return head.next;
// }

// // parsing to integer
// function addLinkedList(l1, l2) {
//   var node1 = l1, node2 = l2;
//   var num1 = '', num2 = '';
//   while(node1) {
//     num1 = node1.value + num1;
//     node1 = node1.next;
//   }
//   while(node2) {
//     num2 = node2.value + num2;
//     node2 = node2.next;
//   }

//   num1 = parseInt(num1, 10);
//   num2 = parseInt(num2, 10);
//   var sum = String(num1 + num2);
//   var head = new Node(sum[sum.length - 1]);
//   var tail = head;
//   for (var i = sum.length - 2; i >= 0; i--) {
//     tail.next = new Node(sum[i]);
//     tail = tail.next;
//   }
//   return head;
// }

// // recursive
// function addLinkedList(l1, l2, carryover) {
//   if (!l1 && !l2 && !carryover) {
//     return null;
//   }

//   var sum = carryover || 0;
//   if (l1) {
//     sum += l1.value;
//   }
//   if (l2) {
//     sum += l2.value;
//   }
//   var result = new Node(sum % 10);
//   if (l1 || l2) {
//     var rest = addLinkedList(
//       l1 ? l1.next : null,
//       l2 ? l2.next : null,
//       sum >= 10 ? 1 : 0
//     );
//     result.next = rest;
//   }
//   return result;
// }