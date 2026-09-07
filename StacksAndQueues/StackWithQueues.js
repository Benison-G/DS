function MyStack () {
    this.q1 = [];
    this.q2 = [];
}

MyStack.prototype.push = function(x) {
    this.q1.push(x);
}

MyStack.prototype.pop = function () {
    let length = this.q1.length - 1;

    for (let i = 0; i < length; i++) {
        this.q2.push(this.q1.shift())
    }

    let front = this.q1.shift();
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return front;
}

MyStack.prototype.top = function () {
    let length = this.q1.length - 1;
    for (let  i =0; i < length; i++) {
        this.q2.push(this.q1.shift())
    }

    let front = this.q1[0];
    this.q2.push(this.q1.shift());

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return front;
}

MyStack.prototype.empty = function () {
    return this.q1.length === 0
}

