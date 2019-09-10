// sets dont have duplicates
function mySet() {
  let collection = [];

  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };

  this.values = function() {
    return collection;
  };

  this.add = function(element) {
    // check whether that element exist first in the collection array
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function(element) {
    // you call delete in the es6 set
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function() {
    return collection.length;
  };

  this.union = function(otherSet) {
    // takes in another set and check for common values between the two sets
    let unionSet = new mySet(); // creates an empty set
    firstSet = this.values();
    secondSet = otherSet.values(); // O(n)
    firstSet.forEach(element => {
      unionSet.add(element);
    });
    secondSet.forEach(element => {
      // O(n // nesting of loops increase the time complexity)
      unionSet.add(element);
    });
    return unionSet;
  };

  this.intersection = function(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = collection.values;
    let secondSet = otherSet.values();
    firstSet.forEach(element => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });
    return intersectionSet;
  };
  this.difference = function(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(element => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  };

  this.subset = function(otherSet) {
    let firstSet = this.values(); // this is a array

    return firstSet.every(element => {
      // returns a bolean
      return otherSet.has(element);
    });
  };
}


let setA =  new mySet()
let setB =  new mySet()

setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');

console.log(setA.subset(setB))
console.log(setA.union(setB).values());
console.log(setA.values())