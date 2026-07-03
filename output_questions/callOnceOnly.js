function likeVideo () {
    let called = 0;
    return function() {
        if (called > 0) {
            console.log("Already called");
        } else {
            console.log("Called the funciton only once");
            called++;
        }
    }
}

const subscribeTo = likeVideo();

subscribeTo();
subscribeTo();
subscribeTo();
subscribeTo();
subscribeTo();