/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

const ll1 = {value: '01', next: {value: '02', next: {value: '03', next:{value: '04', next: null}}}}
const ll2 = {value: 11, next: {value: 12, next: {value: 13, next:null}}}

function Node(val) {
  this.value = val;
  this.next = null;
}


// mutates original
function zip(l1, l2) {
  if (!l2) return ;
  const l1nx = l1.next;
  const l2nx = l2.next;
  l1.next = l2;
  zip(l2, l1nx);
};

// returns new object
function ndZip(l1, l2) {
  if (!l2) return l1;
  const l1nx = l1.next;
  const output = new Node(l1.value)
  output.next = ndZip(l2,l1nx);
  return output;
};



/* test
console.log(JSON.stringify(ndZip(ll1,ll2)));
*/

module.exports = {Node: Node, zip: zip};
