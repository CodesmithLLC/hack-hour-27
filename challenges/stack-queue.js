/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {	

	constructor() {
		this.index = 0
	}

	push(value) {
		this[this.index] = value;
		this.index++;
		console.log(this)
		return this.index;
	}

	pop() {
		if (this.index<=0) return undefined;
		let temp = this[this.index];
		delete this[this.index];
		this.index--;
		return temp;
	}

}


/**
*
* Queue Class
*
*/


class Queue {

	constructor() {
		this.array = [];
		this.secondArray = [];
	}

	push(value) {
		let i = this.array.length-1
		while(this.array.length>0) {
			this.secondArray.push(this.array.pop(i))
			i--;
		}
		this.array.push(value);
		while(this.secondArray.length>0) {
			this.array.push(this.secondArray.pop(i))
			i--;
		}

		return this.array.length;
	}

	pop() {
		return this.array.pop();
	}

}

// testing

// let q = new Queue;
// let s = new Stack;

// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)
// s.pop()
// s.push(4)
// s.pop()
// s.pop()
// s.push(3)
// s.pop()
// s.pop()
// s.pop()
// s.pop()
// s.pop()
// s.pop()
// s.push(1)


// q.push(1)
// q.push(2)
// q.push(3)
// q.pop()
// q.push(4)
// q.push(5)
// q.pop()
// q.pop()
// q.pop()
// q.pop()
// q.pop()
// q.pop()
// q.push(1)


module.exports = {Stack: Stack, Queue: Queue};
