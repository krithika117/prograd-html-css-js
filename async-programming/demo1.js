function resolveafter2seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolved")
        }, 2000)
    })
}

var result;
async function asyncCall() {
    console.log("Calling")
    result = await resolveafter2seconds();
    console.log(result);
}

asyncCall();
setTimeout(() => {
    console.log(result);
}, 1000)

// Output
// Calling
// undefined
// Resolved

setTimeout(() => {
    console.log(result);
}, 4000)

// Output
// Calling
// Resolved
// Resolved