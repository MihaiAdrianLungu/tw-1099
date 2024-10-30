const privateCounter = (() => {
    let count = 0;
    
    console.log(`initial value of the count is ${count}`);

    return () => {
        count++;
        console.log(`current value of the count is ${count}`);
    }
})();

privateCounter();
privateCounter();