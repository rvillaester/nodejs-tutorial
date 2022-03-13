let eating = (food, quantity) => {
    console.log(food, quantity);
}

let person = {
    name: 'Rey',
    gender: 'Male',
    eat(fn) {
        const food = arguments[1];
        const quantity = arguments[2];
        fn.call(person, food, quantity);
        fn.apply(person, [food, quantity]);
    }
}

// normal function call
eating('Rice', 2);
// method call via call, the first parameter corresponds to this keyword
eating.call(person, 'Lechon', 3);
// method call via apply, the first parameter corresponds to this keyword and the params is in array
let paramsArray = ['Banana', 12];
eating.apply(person, paramsArray);
// method call via bind, same with call except that it will not be executed immediately
let newEatingMethod = eating.bind(person, 'Chocolate', 10);
newEatingMethod();

// calling and passing parameters on a method property of an object
person.eat(eating, 'Mango', 5);