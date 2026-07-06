const user = {
    name: "benison",
    logMessage: function () {
        console.log(this.name);
    }
}

setTimeout(user.logMessage, 1000); // Prints undefined as the callback passed does nto have access to the user obj


setTimeout(function () {
    user.logMessage();  // Preserves window object
}, 1000)