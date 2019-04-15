/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2:
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  console.log("TCL: findName -> jazbook", jazbook)
  if (!jazbook.length) return false;

  // sort array
  jazbook.sort((a, b) => {
    var nameA = a[0].toUpperCase(); // ignore upper and lowercase
    var nameB = b[0].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  const findNameHelper = (arr, target) => {
    if (arr.length === 1) return (arr[0][0] === target) ? arr[0][1] : false;

    let mid = Math.floor(arr.length / 2)

    while (arr[mid]) {
      if (arr[mid][0].toUpperCase() > target.toUpperCase()) {
        return findNameHelper(arr.slice(0, mid), target);
      } else if (arr[mid] < target) {
        return findNameHelper(arr.slice(mid+1), target);
      } else {
        return jazarrbook[mid][1];
      }
    }
  }

  return findNameHelper(jazbook, name);
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  const newBook = {};
  newBook.add = (name, num) => {
    newBook[name] = num;
  }
  newBook.remove = (name) => {
    if (newBook[name]) delete newBook[name];
  }
  newBook.find = (name) => {
    if (newBook[name])
      return newBook[name];
    return false;
  }
  //populate newBook
  jazbook.forEach((entry) => {
    newBook.add(entry[0], entry[1]);
  });

  return newBook;

}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

// const jazbook = [
//        ['alex','301-844-3421'],
//        ['jae','301-844-1211'],
//        ['david','301-844-0978'],
//        ['travis','301-844-8505'],
//        ['jasmine','1800-974-4539'],
//      ];

// const newBook = makePhoneBookObject(jazbook);

// console.log('alex - ', newBook.find('alex'));

// newBook.remove('jae');
// newBook.add('quoc', '8584365303')
// console.log('no jae - ', newBook);

module.exports = objectToExport;
