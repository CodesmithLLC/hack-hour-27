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
  let output = false;
  jazbook.forEach(pair => {
    if (pair[0] == name) {
      output = pair[1];
    }
  })
  return output;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  let output = {}
  jazbook.forEach(pair => {
    output[pair[0]] = pair[1];
  })
  output.addPair = function(newPair) {
    this[newPair[0]] = newPair[1]
  }
  output.lookUp = function(name) {
    if (this[name]) return this[name];
    else return undefined;
  }
  output.remove = function(name) {
    delete output[name];
  }

  return output;
}

jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'], 
     ['travis','301-844-8505'],
     ['jasmine','1800-974-4539'],
   ];

// console.log(makePhoneBookObject(jazbook));
// let myObj = makePhoneBookObject(jazbook)
// myObj.addPair(['ray', '916-375-1375'])
//console.log('myObj after adding', myObj)
//console.log(myObj.lookUp('david'))
// myObj.remove('ray')
// console.log('myObj after remove', myObj)



const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
