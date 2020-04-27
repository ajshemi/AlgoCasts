// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data=data
        this.children=[]
    }
    add(data){
        const node=new Node(data)
        this.children.push(node)
    }
    remove(data){
        //filter method is non-destructive
        //filter returns truthy. i.e (1 !==2 ), (1===1) are both truthy
        let filteredNode=this.children.filter(node=> node.data !== data)
        this.children=filteredNode
    }
}

class Tree {
    constructor(){
        this.root=null
    }
    traverseBF(fn){
        //create array
        const arr=[this.root]
        while(arr.length){
            //remove the element in the front of array
            const node=arr.shift()
            //add the children of the remove element to the back of array
            arr.push(...node.children)
            //pass remove node to iterator function
            fn(node)
        }
    }
    traverseDF(fn){
        //create array
        const arr=[this.root]
        while(arr.length){
            //remove the element in the front of array
            const node=arr.shift()
            //add the children of the remove element to the front of array
            arr.unshift(...node.children)
            //pass remove node to iterator function
            fn(node)
        }
    }
}

module.exports = { Tree, Node };
// module.exports={Node}
