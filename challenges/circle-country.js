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

function circleCountry(x, y, r, start_x, start_y, end_x, end_y, bordersCrossed) {
  if (start_x === end_x && start_y === end_y) return bordersCrossed;

  let crossed;
  //horizontal moves:
  let startPosition = [start_x, start_y];
  function horizontalMove(coords) {
    return [coords[0] + 1, coord[1]];
  }
  //vertical moves:
  function verticalMove(coords) {
    return [coords[0], coord[1] + 1];
  }

  //test horizontal move and vertical move. use whichever one doesn't return a crossed border.
  let horizontal = horizontalMove(startPosition);
  let vertical = verticalMove(startPosition);
  if (horizontalMove(startPosition)) {
    return circleCountry(x, y, r, horizontal[0], horizontal[1], end_x, end_y, bordersCrossed)
  }
  else if (verticalMove(startPosition)) {
    return circleCountry(x, y, r, vertical[0], vertical[1], end_x, end_y, bordersCrossed)
  }

  

  //recursion? try to escape one circle, and then repeat.




  return crossed;
}

module.exports = circleCountry;
