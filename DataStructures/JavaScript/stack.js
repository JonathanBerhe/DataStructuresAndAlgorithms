var Stack = function(){
    this.index = 0;
    this.element = {};

    // push() method: put value onto the end of the stack
    this.push = function(value){
        this.element[this.index] = value;
        this.index++;
    }

    // pop() method: removes and return the last element of the stack
    this.pop = function(){
        if(this.index === 0) return undefined;

        this.index--;
        var result = this.element[this.index];
        delete this.element[this.index];
        return result;
    }

    // size() method: return the number of the index onto the stack
    this.size = function(){
        return this.index;
    }

    // peek() method: return the last element of the stack
    this.peek = function(){
        return this.element[this.index-1];
    }

}