/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  
  if(!l2 && l1){return l1};
  if(!l1 && l2){return l2};
    
  function LinkedList() {
    this.head = null;
    this.tail = null;
  }

  LinkedList.prototype.push = function(value) {
    if(!this.head){
      this.head = this.tail = new Node(value);
      return this.head;
    }
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  };
    
  l1 = new LinkedList();
  l2 = new LinkedList();

  for(let i = 1; i < 6; i += 1) {
    l1.push(i);
    l2.push(i+5)
  }
    
  let answer = new LinkedList();
  let arr = [l1,l2];

  for(let i = 0; i < 5; i++){
    answer.push(arr[0].head.value)
    arr[0].head = arr[0].head.next
    answer.push(arr[1].head.value)
    arr[1].head = arr[1].head.next
  }
  return answer
};

module.exports = {Node: Node, zip: zip};
