const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x || null;
    this.next = null;
  }
}

class Queue {

  constructor(){
    this.queue
    this.tail
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if(!this.queue){
      this.queue = new ListNode(value)
      this.tail = this.queue
    }else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next
    }
  } 

  dequeue() {
    let head = this.queue.value;
    this.queue = this.queue.next

    return head;
  }
}

module.exports = {
  Queue
};
