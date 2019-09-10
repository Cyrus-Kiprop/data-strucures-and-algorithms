// binary search tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// function Node(data, left = null, right = null) {
//   // this = Object.create(Node.prototype)
//   this.data = data;
//   this.left = left;
//   this.right = right;
//   return this
// }

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        // takes a node and take its data againist the data to be inserted
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left); // repeat the procedure again pointing this time to the lower leftr node
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.left = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = data.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.node;

    while (current !== data) {
      if (data < current.data) {
        current = current.left;
      }
      if (data > current.data) {
        current = current.right;
      }
    }
    return current;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        // node contains both the children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempnode.left;
        }
        node.data = tempNode.data;
        //restructuring the node after replacing the node
        node.right = removeNode(node.right, tempNode.data);// removes the left far most node
        return node
      }else if (data < node.data) {
          node.left = removeNode(node.left, data)
          return node;

      }else{
          node.right = removeNode(node.right, node);
          return node;
      }
    };
    this.root = removeNode(this.root, data)
  }
}
const bst = new BST()

 bst.add(4)
 bst.add(6)
 bst.add(1)
 bst.add(3)
 bst.add(5)
 bst.add(10)
 bst.add(45)

//  console.log(bst.findMin())
//  console.log(bst.findMax())
 console.log(bst.findMax()) // inverted
 console.log(bst.isPresent(45))
