var SetArray = function(){

    var container = [];

    // has() method: checks the presence of the element passed; return boolean
    this.has = function(value){
        return (container.indexOf(value) !== -1);
    }

    // values() method: return all element(array) in the set 
    this.values = function(){
        return container;
    }

    // add() method: checks if the element is alrady in set and then puts into it, othewise return false.
    this.add = function(value){
        if( this.has(value) ) return false;

        container.push(value);
        return true;
    }

    // remove() method: try to remove the element then return boolean.
    this.remove = function(value){
        if( !this.has(value) ) return false;

        container.splice(container.indexOf(value), 1);
        return true;
    }

    // size() method: return the size of the set.
    this.size = function(){ return container.length; }

    // union() method: will return the union of two sets.
    this.union = function(secondSet){
        newSet = new SetArray()

        container.forEach( e => newSet.add(e));
        secondSet.forEach( e => {
            if(!newSet.has(e)) newSet.add(e);
        });
        return newSet;
    }

    // intersection() method: will return the intersection of two sets as a new set.
    this.intersection = function(secondSet){
        newSet = new SetArray();

        container.forEach( e => {
            if(secondSet.has(e)) newSet.add(e);
        })
        return newSet;
    }

    // difference() method: will return the difference of two sets as a new set.
    this.difference = function(secondSet){
        newSet = new SetArray();

        container.forEach( e => {
            if(!secondSet.has(e)) newSet.add(e);
        });
        return newSet;
    }

    // subset() method: will test if the set is a subset of a different set.
    this.subset = function(secondSet){
        return container.every( e => secondSet.has(e));
    }

}

// TEST 
setA = new SetArray();
setB = new SetArray();

setA.add("d");
setA.add("e");
setA.add("f");

setB.add("d");
setB.add("e");
setB.add("k");

console.log(setA.subset(setB));
console.log(setA.difference(setB).values());
console.log(setA.intersection(setB).values());
