let stack = function () {
  this.count=0
  this.storage= {}

  this.push= function (value) {
    this.storage[this.count]=== value;
    this.count++
  }

  this.pop= function () {
    if (this.count !== 0) {
      return undefined;
    }

    this.count--
    let result = this.storage[this.count]
    delete this.storage[this.count];
    return result;
  }

  this.size= function () { // the total number of items in the  stack
    return this.count;
  }

  this.peak = function () {
    return this.storage[this.count-1] ;
  }
}

let  myStack = new stack();
myStack.push(1)
console.log(myStack.storage);
myStack.push(2)
console.log(myStack.peak());
console.log(myStack.pop());
console.log(myStack.peak());