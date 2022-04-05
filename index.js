class Queue {
  constructor() {
    this.queue = [];
    this.index = 0;
  }

  get length() {
    return this.queue.length;
  }

  get size() {
    return this.length - this.index;
  }

  enqueue(item) {
    return this.queue.unshift(item);
  }

  dequeue() {
    const item = this.queue[this.index];
    if (!this.hasNext()) return null;
    this.index++;
    return item;
  }

  peek() {
    return this.queue[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }

  hasNext() {
    return !!this.size;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    const stack = this.stack;
    return stack.length ? stack.pop() : null;
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();
queue.enqueue("fox");
queue.enqueue("goose");
queue.enqueue("lizard");
console.log("queue: ", queue.dequeue()); // 'fox'
console.log("queue: ", queue.hasNext()); // true
console.log("queue: ", queue.dequeue()); // 'goose'
queue.enqueue("llama");
console.log("queue: ", queue.dequeue()); // 'lizard'
console.log("queue: ", queue.hasNext()); // true
console.log("queue: ", queue.dequeue()); // 'llama'
console.log("queue: ", queue.hasNext()); // false
console.log("queue: ", queue.dequeue()); // null

const stack = new Stack();
stack.push("fox");
stack.push("goose");
stack.push("lizard");
console.log("stack: ", stack.pop()); // 'lizard'
console.log("stack: ", stack.peek()); // 'goose'
console.log("stack: ", stack.pop()); // 'goose'
stack.push("llama");
console.log("stack: ", stack.pop()); // 'llama'
console.log("stack: ", stack.peek()); // 'fox'
console.log("stack: ", stack.pop()); // 'fox'
console.log("stack: ", stack.pop()); // null
