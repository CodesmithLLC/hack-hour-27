/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

// function reverseLinkedList(head) {
//     //is node.next null , yes - > set head
//     //has new head been set, yes -> find the furthest next and mount
//     //if no condition matches, reverseLinkedList head.next
//     let newHead;
//     let i = 0
//     let j = 0
//     let t = 0
//     function r2(){
//         if (newHead !== undefined){
//             do { newHead = newHead.next}
//             while (newHead.next);
//              newHead.next = head;
//              i++;
//              console.log('i', i)
//             }
//             else if (!newHead && head.next === null){
//                 j++
//                 newHead = head;
//                 console.log('j', j)
//                 return newHead
//             } else {
//                 t++
//                 console.log('t', t)
//                 reverseLinkedList(head.next);
//             }        
//         }
//          r2();
//     }


function reverseLinkedList(head){
      //navigate to the back of the list 
        while (head.next){
            head = head.next;
            head.before = 
        }
    //
}





module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};





let a1 = {value: '33', next: 'a2'}
let a2 = {value: '54', next: 'a3'}
let a3 = {value: '53', next: 'a4'}
let a4 = {value: '66', next: 'a5'}
let a5 = {value: '77', next: null}


console.log(reverseLinkedList(a1))