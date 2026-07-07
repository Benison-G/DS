const firstPromise = new Promise((res, rej) => [
    res("First promise")
]);

const secondPromise = new Promise((res, rej) => {
    res(firstPromise);
});

secondPromise.then((res) => {
    return res;
}).then((res) => {
    console.log(res)
}).catch(err => console.log(err));