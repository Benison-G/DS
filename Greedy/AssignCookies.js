const assignCookies = (children, cookies) => {
    children.sort((a , b) => a - b);
    cookies.sort((a, b) => a - b);

    let child = 0;
    let cookie = 0;
   
    while(child < children.length && cookie < cookies.length) {
        if (children[child] <= cookies[cookie]) {
            child++
        }
        cookie++
    }

    return child
}

console.log(assignCookies([1,2], [1,2,3]))
