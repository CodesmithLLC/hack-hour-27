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
  for(let i=0; i<jazbook.length; i++){
    console.log(jazbook[i][0])
    if(jazbook[i][0] === name) return jazbook[i][1]
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){

  function Trie(val){
    this.val = '';
    this.children = {};
    this.phoneNumber = '';
  }
  
  Trie.prototype.addName = function(name, phoneNumber) {
    if(name.length === 0) this.phoneNumber = phoneNumber;
    else {
      if(this.children[name[0]]) {
        this.children[name[0]].addName(name.slice(1), phoneNumber)
      } else {
        this.children[name[0]] = new Trie(name[0])
        this.children[name[0]].addName(name.slice(1), phoneNumber)
      }
    }    
  }
  
  Trie.prototype.lookUpName = function(name) {
    if(!this.children[name[0]]) return false;
    else {
      if(name.length === 0) return this.phoneNumber ? this.phoneNumber : false;
      else this.children[name[0]].lookUpName(name.slice(1))
    }
  }
  
  Trie.prototype.removeName = function(name) {
    if(!this.children[name[0]]) return false;
    else {
      if(name.length === 0 && this.phoneNumber) delete this.phoneNumber;
      else this.children[name[0]].removeName(name.slice(1))
    }  
  }

  const phoneBook = new Trie();
  for(let i=0; i<jazbook.length; i++){
    phoneBook.addName(jazbook[i][0], jazbook[i][1])
  }

  return phoneBook;

}

//tests

jazbook = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
]

// console.log(findName(jazbook, 'jasmine'))

makePhoneBookObject(jazbook);

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
