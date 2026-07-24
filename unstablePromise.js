let attempts = 0;

const unstableFunction = () => {
    return new Promise((resolve, reject) => {
        attempts++;

        setTimeout(() => {
            if (attempts < 5) {
                reject(`${attempts} attempt failed`);
            } else {
                resolve(`${attempts} attempt succeeded`);
            }
        }, 1000)
    })
}

const retry = async (fn, retries) => {
    try {
        console.log("Loading...")
        return await fn();
    } catch(err) {
        console.error(err);
        if(retries <= 1) throw err;
        return retry(fn, retries - 1 )
    }
}

retry(unstableFunction, 7).then(console.log).catch(console.error);