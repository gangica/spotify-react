// Stack
class Stack {
    constructor(size) {
        this.size = size;
        this.data = [];
    }

    isEmpty() {
        return this.data.length == 0;
    }

    add(value) {
        if (this.data.length < this.size) {
            this.data.push(value);
        } else {
            return "full";
        }
    }

    pop() {
        if (!this.isEmpty) {
            this.data.pop();
        } else {
            return "empty"
        }
    }
}

var a = new Stack(4);

// Queue
class Queue {
    constructor(size) {
        this.size = size;
        this.data = [];
    }

    isEmpty() {
        return this.data.length == 0;
    }

    enqueue(value) {
        if (this.data.length < this.size) {
            this.data.push(value);
        } else {
            return "full";
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            this.data.shift();
        } else {
            return "empty"
        }
    }
}

var a = new Queue(4);

// Linked List
class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    add(value) {
        // if no root, add item
        if (!this.root) {
            this.root = new Node(value);
            return this
        }    
        // otherwise, move to the last node
        let lastNode = this.root;
        
        // traverse to the last node
        while (lastNode.next) {
            lastNode = lastNode.next;
        }

        // set new node
        lastNode.next = new Node(value);
        return this
    }

    delete(value) {
        // if no root, false
        if (!this.root) {
            return false;
        }

        // if root is deleted
        if (this.root.head == value) {
            if (this.root.next == null) {
                this.root = null;
                return this
            } else {
                this.root.head = this.root.next.head;
                this.root.next = this.root.next.next;
                return this
            }
        }
        
        // otherwise, move through next nodes
        let currentNode = this.root;

        while (currentNode.next) {
            if (currentNode.next.head == value) {
                currentNode.next = currentNode.next.next;
                return this
            } else {
                currentNode = currentNode.next;
            }
        }

        return "no match";
    }

    search(value) {
        if (this.root.head == value) {
            return true
        }

        let lastNode = this.root;

        while (lastNode.next) {
            if (lastNode.next.head == value) {
                return true
            } else {
                lastNode = lastNode.next
            }
        }

        return false
    }
}

// Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }    
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
            return this
        }

        let currentNode = this.root;

        while (currentNode) {

            if (currentNode.value < value) {

                if (!currentNode.right) {
                    currentNode.right = new TreeNode(value);
                    return this
                } else {
                    currentNode = currentNode.right;
                }

            } else if (currentNode.value > value) {

                if (!currentNode.left) {
                    currentNode.left = new TreeNode(value);
                    return this
                } else {
                    currentNode = currentNode.left;
                }
            }
        }

    }

    minNodeValue(node) {
        let current = node;

        while (current.left) {
            current = current.left
        }

        return current
    }

    delete(value) {
        // if tree empty
        if (!this.root) {
            return false
        }

        // root delete
        
        // nodes delete
        
    }

    search(value) {
        if (this.root.value == value) {
            return true
        }

        let currentNode = this.root;

        while (currentNode) {

            if (currentNode.value < value) {
                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    return false
                }
            } else if (currentNode.value > value) {
                if (currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    return false
                }
            } else {
                return true
            }
        }
    }
}