// a FIFO data 
// First In First Out



// let q = [];
// q
// []
// q.push(1)
// 1
// q.push(2)
// 2
// q.push(3)
// 3
// q
// (3) [1, 2, 3]
// q.shift()
// 1
// q
// (2) [2, 3]
// q.shift()
// 2
// q
// [3]
// q.shift()
// 3
// q
// []
// q
// []
// q.shift()
// undefined
// q.unshift(1)
// 1
// q.unshift(2)
// 2
// q.unshift(3)
// 3
// q
// (3) [3, 2, 1]
// q.pop()
// 1
// q
// (2) [3, 2]
// q.pop()
// 2
// q
// [3]








// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.length = 0;
//     }

//     enqueue(value){
//          let newNode = new Node(value);
//          if(!this.first){
//              this.first = newNode;
//              this.last = newNode;
//          } else {
//              this.last.next = newNode;
//              this.last = newNode
//          }
//          return ++this.length;
//     }

//     dequeue(){
//         if(!this.first){
//             return null;
//         }

//         let temp = this.first;
//         if(this.first === this.last){
//             this.last = null;
//         } else {
//             this.first = this.first.next;
            
//         }
//         this.length--
//         return temp.value;
//     }

// }




class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

// Big O on queues 
// insertion - O(1)
// Removal - O(1)
