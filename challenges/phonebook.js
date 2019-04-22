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
  jazbook.forEach(element => {
    if (element[0] === name) {
      return element[1]
    }
  });
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  function phonebook(array) {
    this.book = array.reduce((acc, val) => {
      acc[val[0]] = val[1];
      return acc;
    }, {})
    this.remove = (name) => delete this.book[name];
    this.add = (arr) => this.book[arr[0]] = arr[1];
    this.find = (name) => this.book[name] || 'name not found';
  }
  return new phonebook(jazbook)
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
]

const pb = makePhoneBookObject(jazbook);
console.log(pb.find('alex'), pb.find('jake'))