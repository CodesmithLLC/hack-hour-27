// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4) {
  const commons = new Set();

  array1.forEach(elm => {
    let presentInArr2 = false;
    let presentInArr3 = false;
    let presentInArr4 = false;
    array2.forEach(e => {
      if (e === elm) {
        presentInArr2 = true;
      }
    })

    array3.forEach(e => {
      if (e === elm) {
        presentInArr3 = true;
      }
    })

    array4.forEach(e => {
      if (e === elm) {
        presentInArr4 = true;
      }
    })

    if (presentInArr2 && presentInArr3 && presentInArr4) {
      commons.add(elm);
    }

  })

  if (commons.size) {
    return Array.from(commons);
  } else {
    return "Nothing in Common!";
  }
}

module.exports = commonElements;
