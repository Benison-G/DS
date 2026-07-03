console.log("start");
setTimeout(() =>  console.log("settimeout"), 0);
Promise.resolve(console.log("promise")).then((res) => res); // This prints before "end"
console.log("end");



console.log("start");
setTimeout(() =>  console.log("settimeout"), 0);
Promise.resolve(() => setTimeout(() =>  console.log("settimeout in promise"), 0)).then((res) => res()); // This prints before "end"
console.log("end");

console.log("start");
setTimeout(() =>  console.log("settimeout"), 0);
setTimeout(() => {
    Promise.resolve(() => console.log("Promise inside settimeout")).then((res) =>  res());
}, 0)
Promise.resolve(() => setTimeout(() =>  console.log("settimeout in promise"), 0)).then((res) => res()); // This prints before "end"
console.log("end");
