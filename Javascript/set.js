// sets dont have duplicates
function mySet() {
    let collection = []

    this.has = function (element) {
        return (this.collection.indexOf(element) !== -1)
    }

    this.values = function () {
        return this.collection;
    }

    this.add = function (element) {
        // check whether that element exist first in the collection array
        if(!this.has(element)) {
            collection.push(element);
            return  true;
        }
        return false;
    }

    this.remove = function (element) {
        this.collection.pop(element)
    }



}