let attempts = 0
const unstablePromise = () => {
    attempts++
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (attempts < 5) {
                rej(`Attempt ${attempts} failed`)
            } else {
                res(`Attempt ${attempts} succeeded`)
            }
        }, 1000)
    })
}

const retry = async (fn, retries, isRetry = false) => {
    try {
        if (isRetry) {
            console.log("Retrying...")
        }

        return await fn()
    }
    catch(err) {
        console.log(err)
        return retry(fn, retries - 1, true)
    }
}

retry(unstablePromise, 7).then(res => console.log(res)).catch(err => console.log(err))