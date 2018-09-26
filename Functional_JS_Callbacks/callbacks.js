//the function that is passed in to another function is the callback function.

//delay the execution of the anon function
console.log('starting');

//executes the milliseconds to wait then executes the function.
setTimeout(()=>{
    console.log('The function has been executed');
}, 3000)

//same as
setTimeout(function callback(){
    console.log('The function has been executed');
}, 3000)
//callback is the callback function, it was passed in and excutes after the main function is done.

console.log('After setTimeout');

//another example of a 'callback'
//executes callback, which is the callback after a specified amount of time.
function delay(seconds, callback){
    setTimeout(callback, seconds*1000);
}

delay(2,()=>{console.log('three seconds')});
