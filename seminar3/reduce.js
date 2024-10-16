const arr = [1,2,3,4,5];

const sum = arr.reduce((acc, el) => {
    return acc+ el
}, 10);

console.log(sum);