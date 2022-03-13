// this keyword is determined by how a function is called
const person = {
    name: 'Rey',
    eat(){
        console.log(this);
    }
}
// this will return the reference of the object
// function call as a method to the object
person.eat();

// this will return the global object
// function is executed as a standalone object
const eat = person.eat;
eat();