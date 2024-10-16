function sum (a,b) {
    console.log(a+b);
}

const sum2 = (a,b) => {
    console.log(a+b);
}

const logger = message => console.log(message);

// sum(1,2);
// sum2(1,2);

const obj = {
    name: 'Adrian',
    meet: function () {
        console.log(this.name);
    },
    meet2: () => {
        console.log(this)
    } 
}

obj.meet();
obj.meet2()