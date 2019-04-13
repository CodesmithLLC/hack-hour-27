/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */


function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  return r.reduce((acc, rad, i) => {
    const startDistance = Math.hypot(x[i] - start_x, y[i] - start_y)
    const endDistance = Math.hypot(x[i] - end_x, y[i] - end_y)
    return (startDistance > rad && rad > endDistance || (startDistance < rad && rad < endDistance)) ? ++acc : acc
  }, 0)
}

module.exports = circleCountry;

// function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
//   // check if start or end points lie within circles
//   // if distance between (x,y) is less than the radius distance from (x[i], y[i]), calculate the distance between x[i] and y[i] and x and y and compare it to the radius from x[i] and y[i]
//   // count++ for every circle that ecapsulates x and y of start and end positions
//   // determine the number of circles that surround x, y start and end points
//   // distance = Math.sqrt(Math.pow(2 - 1, 2) + Math.pow(4 - 3, 2))
//   count = 0
//   for (var i = 0; i < x.length; i++) {
//     //distance is the distance between center of circle to (start_x, start_y)
//     distance = Math.sqrt(Math.pow(x[i] - start_x, 2) + Math.pow(y[i] - start_y, 2))
//     if (distance < r[i]) {
//       count++;
//     }
//   }
//   for (var i = 0; i < x.length; i++) {
//     //distance is the distance between center of circle to (start_x, start_y)
//     distance = Math.sqrt(Math.pow(x[i] - end_x, 2) + Math.pow(y[i] - end_y, 2))
//     if (distance < r[i]) {
//       count++;
//     }
//   }
// }