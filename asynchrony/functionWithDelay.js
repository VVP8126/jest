const functionWithDelay = (callback, delay) => {
    return new Promise(
        (resolve) => 
        setTimeout(
            () => { resolve(callback()) },
            delay
    ));
}

module.exports = functionWithDelay;
