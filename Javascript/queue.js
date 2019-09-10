// print
// enqueue
// dequeue
// front
// size
// isEmpty
function Queue() {
  collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    return collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

let q = new Queue();
q.enqueue(23);
q.enqueue('lamda');
q.enqueue('calculus');

q.print();
q.dequeue();
q.print();
console.log(q.isEmpty());
console.log(q.size());
console.log(q.front());

// prioty Queue
// they are just queues where the user passes in the priority of the elements being passed

function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(elem){ // add elements to the queue
  if(this.isEmpty()){
      this.collection.push(elem);
      return true;

  }else if(!this.isEmpty()){
      let added = false;
      for(let i = 0; i < this.collection.length; i++){
          if(elem[1] < this.collection[i][1]){
              this.collection.splice(i,0, elem);
              added = true;
              return true
          }
      }
      if(added === false){
          this.collection.push(elem);
          return true;
      }
  }else{
      return false;
  }
  return this.collection;
  }

  this.isEmpty = function(){
      while(this.collection.length > 0){
          return false;
      }
      return true;
  }
  this.dequeue = function(){
      return this.collection.shift();
  }
  this.front = function(){
      return this.collection[0];
  }

   this.size = function(){
       return this.collection.length;
   }



  // Only change code above this line
}

// test
let pq =  new PriorityQueue();
pq.enqueue(['dalmas', 1])
pq.enqueue(['cyrus kiprop', 2])
pq.enqueue(['Patrick nyatindo', 4])
pq.enqueue(['robert gathee', 2])
pq.printCollection()
pq.dequeue()
pq.printCollection()