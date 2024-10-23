const person = {
    meet: function() {
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    },
    greet: function(age, punctuation) {
        console.log(`I am ${age} old${punctuation}`)
    }
}

const person2 = {
    firstName: 'Adrian',
    lastName: 'Lungu'
}

// person.meet.call(person2)
// person.greet.call(person2, 24, '.');
// person.greet.apply(null, [24, '.']);

const bound = person.greet.bind(person2, 24);

bound('.');