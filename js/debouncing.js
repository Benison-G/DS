function debouncing (cb, delay) {
    let timer;

    return function(...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            cb()
        }, delay)
    }
}

const showSomething = () => console.log("Displaying");

const debouncedFunction = debouncing(showSomething, 2000);

debouncedFunction();