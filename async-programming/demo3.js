function getAsyncData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
}

async function getData() {
    var data1 =  getAsyncData();
    var data2 =  getAsyncData();
    var data2 =  getAsyncData();
    return await data1 + await data2;
}

getData().then((data) => {
    console.log(data)
})