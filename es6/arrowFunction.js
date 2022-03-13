// the old way to access 'this' in a sub function
const person = {
    eat() {
        var self = this;
        setTimeout(function () {
            console.log(self);
        }, 1000)
    }
}
person.eat();

// the es6 way
// arrow function don't rebind 'this'
const personES6 = {
    eat() {
        setTimeout(() => {
            console.log(this);
        }, 1000)
    }
}
personES6.eat();