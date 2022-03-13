import Person, {thinking} from "./person.js";

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
thinking();