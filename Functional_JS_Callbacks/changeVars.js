var x = 1;

console.log('x is originally '+x);

setTimeout(()=>
{
    x=99
    console.log('x has been changed, and is now '+x)
}, 
3000);

console.log('x is '+x);