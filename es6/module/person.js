export default class Person {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

export const thinking = () => {
    console.log('This person is thinking');
}