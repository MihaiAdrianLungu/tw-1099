// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const status = true;

//         if (status) {
//             resolve('Operation succeeded');
//         } else {
//             reject(new Error('Error message'));
//         }
//     }, 2000)
// })

// promise.then((message) => console.log(message)).catch((error) => console.log(error))

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
});

function f() {
    // let result = promise; // wait until the promise resolves (*)
    // console.log(result); // "done!"\
    promise.then((message) => console.log(message)).catch((error) => console.log(error))
}

f();