
var length = 4;

function callback () {
    console.log(this.length);
}

const obj = {
    length: 2,
    myFunc (fn) {
        fn.call(this); // fn () in browser prints 4 and arguements[0]() prints 3 for obj.myFunc(callback, 1, 2)
    }
}

obj.myFunc(callback);