function counterIIFE() {
    const count = 0;
    (function printCount() {
        if (count === 0) {
            let count = 1;
            console.log(count);
        }
        console.log(count);
    })() // Prints 1, 0
}

// Closure example
// -- Start -- //
const createBase = (base) => {
    return function (num) {
        return num + base;
    }
}

var addSix = createBase(6);
//--End--//

function loopValuesWithLetToPreserveScope() {
    // changing the def of i to var makes the output to print 3 - 3 times
    // Since let is block scoped it persists in the closure of setTimeout
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000);
    }
}

// without using let
function loopValuesWithClosure() {
    for (var i = 0; i < 3; i++) {
        function inner(i) {
            setTimeout(() => {
                console.log(i)
            }, 1000)
        }
        inner(i);
    }
}

counterIIFE();
console.log("//------------------------//");

console.log(addSix(10));
console.log("//------------------------//");

console.log(addSix(21));
console.log("//------------------------//");

loopValuesWithLetToPreserveScope();

loopValuesWithClosure();