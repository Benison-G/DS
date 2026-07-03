// Closures for private variables

function counter() {
    let counter = 0;

    const add = (num) => {
        counter += num
    }

    const get = () => {
        return counter;
    }
    return {
        add, get
    }
}

const c = counter();
c.add(5);
c.add(26);

console.log("Counter: ", c.get());