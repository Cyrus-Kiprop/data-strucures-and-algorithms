function destroyer(arr) {
    let collection = arr
let argumentsArr = [...arguments] //converts the argument object into an array
let extraArgs = argumentsArr.slice(1);

let result = []

let intersection = function (element) {
    if (collection.indexOf(element) !== -1&& extraArgs.indexOf(element)===-1) {
        result.push(element)
    }
}

let union = function (element) {
    if (collection.indexOf(element) !== -1&& extraArgs.indexOf(element)!==-1) {
        result.push(element)
    }
}

collection.map((v=>{
    intersection(v)
}))
    return result
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);