async function getData() {
    const result = await fetch('https://httpbin.org/get');

    console.log(result);
}

getData();