function throttling(cb, delay) {
    let shouldWait = false;
    return function (...args) {
        if (shouldWait) return;

        cb(...args)
        shouldWait = true;

        setTimeout(() => {
            shouldWait = false;
        }, delay);
    }
}

const showSomething = () => console.log("Displaying...");

const throttler = throttling(showSomething, 2000);

setInterval(() => {
    console.log("ticking...");
    throttler()
}, 500);