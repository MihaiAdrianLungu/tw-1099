const arr = [1,2,3,4,5];

const forEachArr = arr.forEach(el => {
    return el * 10
});

const mapArr = arr.map(async (el) => {
    const result = await fetch('');
    return el * 10;
})

console.log(forEachArr);
console.log(mapArr);

async function test(message) {
    console.log(message);
}

const test2 = (message) => {
    console.log(message);
}

const test3 = async message => console.log(message);

arr.map(el => console.log(el * 10))