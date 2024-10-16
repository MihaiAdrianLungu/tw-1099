const obj = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const { lastName, firstName } = obj;
const lastName2 = obj.lastName;
const firstName2 = obj.firstName

console.log(lastName);