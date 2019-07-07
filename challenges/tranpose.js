/* Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version
 * of that array.
 * 
 * Example: 
 * const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
 * console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
 *
 */


// basically you just need to map from the first element of the nested array of the given array, and then start mapping each row and return out  into an array of the row[index] that you’re currently on. this will work for a 3D array too
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false], ['wisdom', 'lit'] ]
function transpose(args) {
  return args[0].map((column, i) =>args.map(row => row[i]))
}
transpose(twoDimArray); // -> [['fred', 30, true], ['barney', 40, false], ['wisdom','lit']]