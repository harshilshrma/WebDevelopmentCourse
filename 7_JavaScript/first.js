const  getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am a promise");
        resolve("success");
    });
}

let promise = getPromise();

promise.then(() => {
    console.log("resolved");
})

promise.catch(() => {
    console.log("error caught");
})



// function getData(dataId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data : ", dataId);
//         }, 5000);
//     });
// }