function User(name, age) {
    this.name = name;
    this.age = age;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log('User is logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log('User is logged out');
}

const user = new User('Adrian', 25);

console.log(user);