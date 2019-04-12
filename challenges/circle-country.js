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
  // helper function
  // returns true of coord x,y lies within circle center cx, cy, radius r
  function withinCircle(cx, cy, r, x, y) {
    return (cx-x)**2 + (cy-y)**2 < r ** 2;
  }

  const len = x.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    // only start OR end lands in circle
    if ((withinCircle(x[i], y[i], r[i], start_x, start_y) && !withinCircle(x[i], y[i], r[i], end_x, end_y))
    || (!withinCircle(x[i], y[i], r[i], start_x, start_y) && withinCircle(x[i], y[i], r[i], end_x, end_y))) {
      count++;
    }
    // otherwise both points land in same circle or are not in circle at all so don't count
  }
  return count;
}


module.exports = circleCountry;


// console.log(circleCountry([0,5],[0,5],[2,2],-1,0,5,5));