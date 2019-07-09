/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function deleteDups(head) {
  const data = {};
  let prev;
  for (let curr = head; curr; curr = curr.next) {
    if (curr.value in data) {
      prev.next = curr.next;
    } else {
      data[curr.value] = true;
      prev = curr;
    }
  }
}
module.exports = deleteDups;


// var Node = function(value) {
//   this.value = value;
//   this.next = null;
// }
// // Hashing/Object
// // Time complexity: O(N)
// // Space complexity: O(N);
  
// }
// // Nested loops
// // Time Complexity: O(N^2)s
// // Space Complexity: O(1)
// function deleteDups2(head) {
//   let inner;
//   for (let outer = head; outer.next; outer = outer.next) {
//     inner = outer;
//     while (inner.next) {
//       if (outer.value === inner.next.value) {
//         inner.next = inner.next.next;
//       } else {
//         inner = inner.next;
//       }
//     }
//   }
//    let end = new Date().getTime();
// }
// // TESTINGGGGGGGGGGGGGGGGGGG YOOOOOOOOOOOOOOOOOOO
// let a = new Node(1);
// let b = new Node(2);
// let b2 = new Node(2);
// let c = new Node(3);
// let d = new Node(4);
// let e = new Node(5);
// let f = new Node(6);
// let g = new Node(4); 
// a.next =b;
// b.next =b2;
// b2.next =c;
// c.next =d;
// d.next =e;
// e.next =f;
// f.next = g;
// //function to log linked list
// function log(head) {
//   let curr = head;
//   let values = [];
//   while(curr){
//     values.push(curr.value);
//     curr = curr.next;
//   }
  
//   let str ='';
//   for(let i=0; i<values.length-1; i++){
//     str+= values[i] +' -> ';
//   }
//   str+=values[values.length-1];
  
//   return str;
// }
// console.log('before: ',log(a));
// deleteDups(a);
// console.log('after:', log(a));