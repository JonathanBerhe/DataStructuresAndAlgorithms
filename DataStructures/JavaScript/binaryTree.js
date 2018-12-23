class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }


    _removeNode(node, data){
        if( node == null ) return null;

        if( data == node.data )
        {
            // node without children
            if( node.left == null && node.right == null ) return null;

            // node has no left child.
            if( node.left == null ) return node.right;

            // node has no right child.
            if( node.right == null) return node.left;

            var tempNode = node.right;
            while( tempNode.left !== null ) tempNode = tempNode.left;

            node.data = tempNode.data;
            node.right = this._removeNode(node.right, data);
            return node;
        }
        else if( data < node.data )
        {
            node.left = this._removeNode(node.left, data);
            return node;
        }
        else
        {
            node.right = this._removeNode(node.right, data);
            return node;
        }

        this.root = this._removeNode(this.root, data);
    }

    add(data) {
        const node = this.root;
        if (node === null) {
          this.root = new Node(data);
          return;
        } else {
          const searchTree = function(node) {
            if (data < node.data) {
              if (node.left === null) {
                node.left = new Node(data);
                return;
              } else if (node.left !== null) {
                return searchTree(node.left);
              }
            } else if (data > node.data) {
              if (node.right === null) {
                node.right = new Node(data);
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

    findMin(){
        // search for every left node in the tree.
        // when there's no more left node, the last node is min value.
        let current = this.root;
        while(current.left !== null) current = current.left;
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right !== null) current = current.right;
        return current.data;
    }

    find(data){
        let current = this.root;
        while(current !== null) 
        {
            current = (data < current.data) ? current.left : current.right;

            if(current === null) return null;
        }
        return current;
    }

    isPresent(data){
        let current = this.root;

        while(current){
            if(data === current.data) return true;
            current = (data < current.data) ? current.left : current.right;
        }
        return false;
    }

    remove(data) {
        const removeNode = function(node, data) {
          if (node == null) {
            return null;
          }
          if (data == node.data) {
            // node has no children 
            if (node.left == null && node.right == null) {
              return null;
            }
            // node has no left child 
            if (node.left == null) {
              return node.right;
            }
            // node has no right child 
            if (node.right == null) {
              return node.left;
            }
            // node has two children 
            var tempNode = node.right;
            while (tempNode.left !== null) {
              tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
          } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
          } else {
            node.right = removeNode(node.right, data);
            return node;
          }
        }
        this.root = removeNode(this.root, data);
      }
}

// TEST

const bst = new BinarySearchTree();

bst.add(8);
bst.add(9);
bst.add(7);
bst.add(6);
bst.add(1);
bst.remove(1)

console.log("\n Min value into the Tree: ", bst.findMin());
console.log("\n Max value into the Tree: ", bst.findMax());