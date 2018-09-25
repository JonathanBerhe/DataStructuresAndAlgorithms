var Queue = function(){
    container = [];

    this.print = () => console.log(container);

    this.enqueue = element => container.push(element);

    this.dequeue = element => container.shift();

    this.front = () => container[0];

    this.size = () => container.length;

    this.isEmpty = () => (container.length === 0);
}

// TEST

q = new Queue()

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
q.print();
console.log("the fist element is: ", q.front());
