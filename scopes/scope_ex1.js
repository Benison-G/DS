

// const obj1 = () => {
//    return {
//       name: "Ben",
//       ref: this
//    }
// }

// const userObj1 = obj1();
// console.log(userObj1.ref.name); // prints undefined

// ---PROBLEM ABOVE -- //

const obj = () => {
   return {
      name: "Ben",
      ref: function () {
         return this;
      }
   }
}

const userObj = obj();
console.log(userObj.ref().name);
// Now the ref will have access to this and prints Ben;
