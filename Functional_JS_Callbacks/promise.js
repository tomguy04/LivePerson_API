//promises are a way of dealing with asynchronousity
var delay = (seconds) => new Promise((resolves,rejects)=>{
    //instead of using callback, use resolves.

    //or simulate an error
    //throw new Error('argh');
    if (seconds >= 1) {
        rejects(new Error(`${seconds} is too long`))
    }

    setTimeout(resolves, seconds*1000);
});

delay(1)
    .then(()=>console.log('the delay has ended')) //wait for the promise to run successfully, then excecute the .then
    //if an error has occurred, we run the .catch instead of the .then
    .catch((error)=>{console.log(`error is :${error.message}`)});

//same code but with a callback
//callbacks deals with asynchronousity
var delay = (seconds, callback) => {
    setTimeout(callback, seconds*1000); //wait for seconds to pass, then run the callback (delay)
}

// delay(1,()=>{console.log('the delay has ended')});

console.log('end first tick');