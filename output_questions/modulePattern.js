const module = (function () {
    function privateMethod(msg) {
        console.log(msg)
    }

    function publicMethod() {
        privateMethod("Public calling private method")
    }

    return {
        publicMethod
    }
})();

module.publicMethod();
// module.privateMethod(); //this gives an error saying not a function hence protecting the properties via closures