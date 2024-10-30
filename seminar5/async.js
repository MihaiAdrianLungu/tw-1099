setTimeout(() => {
    console.log('set time out')
}, 1000)

Promise.resolve().then(() => console.log('promise'))

console.log(1)
console.log(2)