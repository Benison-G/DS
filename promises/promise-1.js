console.log("start");

const sumVar = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = false;

        if (result) resolve("Resolved");
        reject("Rejected")
    }, 2000)
})

sumVar.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err);
})
// we can also write as below

// Promise.resolve(setTimeout(() => {
//     console.log("Resolved direct promise")
// }, 1000));

console.log("stop");
