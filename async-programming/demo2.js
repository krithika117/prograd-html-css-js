// Callback without async or await or promise
var x = 1;

function asyncIncrement(callback) {
    setTimeout(() => {
        x += 1;
        callback(x);
    }, 1000);
}

asyncIncrement(() => {console.log(x)})