class Person {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

const rey = new Person('Rey');
rey.eat();

const john = new Person('John');
john.eat();

// inheritance
class Driver extends Person {
    constructor(name, hobby){
        super(name);
        this.hobby = hobby;
    }
    drive() {
        console.log(`${this.name} is driving`);
    }
}

const driver = new Driver('Garry', 'basketball');
driver.eat();
driver.drive();