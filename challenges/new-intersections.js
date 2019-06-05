/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

const testData = {
  x:[0,1 ,2,3,4, 1],
  y:[1,12,3,1,5, 0]
}

function newIntersections(x, y){
  const hLines = makeLines(y, x);
  const vLines = makeLines(x, y);
  console.log('hLines:', hLines, 'vLines:', vLines)
  return compareAndMapArrs(hLines, vLines, compareLines);
}

function makeLines(alignedAxis, variantAxis){
  const lines = [];
  const alreadyHandledComps = new Set();
  for (let i = 0; i<alignedAxis.length; i++){
    if(alreadyHandledComps.has(alignedAxis[i])){
      continue;
    }
    const line = {"aligned": alignedAxis[i], "variant":[variantAxis[i]]};
    for(let j = i+1; j < alignedAxis.length; j++){
      if(alignedAxis[i] === alignedAxis[j]){
        line.variant.push(variantAxis[j]);
      }
    }
    if(line.variant.length>1){
      line.variant.sort((a,b)=>a-b);
      lines.push(line);
    }
    alreadyHandledComps.add(alignedAxis[i]);
  }
  return lines;
}

function compareLines(hLine, vLine){
  console.log(hLine, vLine);
  if(
      (vLine.aligned> hLine.variant[0] && 
        vLine.aligned< hLine.variant[hLine.variant.length-1]) 
      &&
      (hLine.aligned> vLine.variant[0] &&
       hLine.aligned< vLine.variant[vLine.variant.length-1])
    ){
    return {x: vLine.aligned, y: hLine.aligned}
  }
}

function compareAndMapArrs(arr1, arr2, cb){
  const returnArr = [];
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      const item = cb(arr1[i], arr2[j])
      if(item){
        returnArr.push(item);
      }
    }
  }
  return returnArr;
}

console.log(newIntersections(testData.x, testData.y));

module.exports = newIntersections;
