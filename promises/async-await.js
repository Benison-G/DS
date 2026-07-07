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

const promiseResults = async () => {
    try {
        const message1 = await promise1();
        console.log(message1)
        const message2 = await promise2();
        console.log(message2)
        const message3 = await promise3();
        console.log(message3)

    } catch (err) {
        console.log(err);
    }

}

promiseResults();

