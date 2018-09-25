class PriorityQueue {
    constructor(){
        this.container = [];
    }
    
    print(){ console.log(this.container); }

    enqueue(AssociativeElement){
        if(this.isEmpty()){
            this.container.push(AssociativeElement);
        }
        else{
           var added = false;
           for(var i=0; i<this.container.length; i++){
               if(AssociativeElement[1] < this.container[i][1]){
                   this.container.splice(i, 0, AssociativeElement);
                   added = true;
                   break;
               }
           }
           if(!added) this.container.push(AssociativeElement);
        }
    }

    dequeue(){
        value = this.container.shift();
        return value[0];
    }

    front(){ return this.container[0]; }

    size(){ return this.container.length; }

    isEmpty(){ return ( this.container.length === 0); }
}

// TEST

pq = new PriorityQueue();

pq.enqueue(['Hello', 5]);
pq.enqueue(['Hola', 3]);
pq.enqueue(['Hi', 8]);

pq.print()
first = pq.front()
console.log(`The first associative element is: ${first[0]} with priority: ${first[1]}\n`);

pq.enqueue(['Ciaone', 1]);
pq.print()
first = pq.front()
console.log(`The first associative element is: ${first[0]} with priority: ${first[1]}`);
