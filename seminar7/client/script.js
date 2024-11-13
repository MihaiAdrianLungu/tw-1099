
const getUsers = async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/users');
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

const getUsers2 = function() {
    fetch('http://127.0.0.1:3000/users')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

getUsers2();