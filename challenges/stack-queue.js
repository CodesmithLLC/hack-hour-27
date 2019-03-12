/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  let result = []
  let length = 0
  const push = (num) => {
    return result[length++] = num
  }
  const pop =  () => {
    return result[length--] = null
  }
  return result
}


/**
* Queue Class
*/


function Queue() {
  let result = new Stack
  let reverseResult = new Stack
  let length = 0
  const dequeue = () => {
    if (this.length > 0) {
      reverseResult = result.reverse().pop().reverse()
      result = reverseResult.reverse()
      this.length--
      return result
    }
    return result
  }
  const enqueue = (num) => {
    result.push(num)
    reverseResult = result.reverse()
    this.length++
    return result
  }
}

module.exports = {Stack: Stack, Queue: Queue};