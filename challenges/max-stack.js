/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
// LIFO
function Stack() {
  // body...
  const stack = {
    elements: [],
    length: 0,
    max: 0,
  }

  const push = (el) => {
    stack.elements[stack.length] = el
    stack.max = Math.max.apply(null, stack.elements)
    stack.length = stack.length + 1
    return stack.max
  }

  const pop = () => {
    if (!stack.elements[0]) return stack.elements
    if (stack.length > 0) stack.length = stack.length -1
    const last = stack.elements.splice(-1, 1)
    stack.max = Math.max.apply(null, stack.elements)
    return last
  }

  const getMax = () => {
    return stack.max
  }
}

module.exports = Stack;