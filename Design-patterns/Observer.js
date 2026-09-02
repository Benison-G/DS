function Subject () {
    this.observers = []
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    unsubscribe: function (toBeFiltered) {
        this.observers = this.observers.filter((fn) => {
            return fn !== toBeFiltered
        })
    },
    fire: function () {
        this.observers.forEach(fn => fn());
    }
}

function Observer1 () {
    console.log("observer 1 listened")
}

function Observer2 () {
    console.log("observer 2 listened")
}

function Observer3 () {
    console.log("observer 3 listened")
}

const sub = new Subject();
sub.subscribe(Observer1);
sub.subscribe(Observer2);
sub.subscribe(Observer3);

sub.fire();

console.log("-----------------------")
sub.unsubscribe(Observer2);
sub.fire();