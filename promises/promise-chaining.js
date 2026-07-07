const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved promise 1")
        }, 1000)
    })
}

const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved promise 2")
        }, 1000)
    })
}

const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved promise 3")
        }, 1000)
    })
}

promise1().then((res) => {
    console.log(res);
    return promise2();
}).then((res) => {
    console.log(res);
    return promise3();
}).then(res => console.log(res)).catch((err) => console.log(err));
