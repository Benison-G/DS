console.log("start");

const promise = new Promise ((resolve, reject) => {
    console.log("1")
    resolve("promise 1 resolved");
}) 

promise.then((res) => {
    console.log("Result: ",res);
});

console.log("stop");