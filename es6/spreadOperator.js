// array
const numArray1 = [0, 2, 5];
const numArray2 = [8, 10, 18];
const combinedOldWay = numArray1.concat(numArray2);
console.log(combinedOldWay);
const combinedSpreadOp = [...numArray1, ...numArray2];
console.log(combinedSpreadOp)

// object
const person = {
    name: 'John',
    gender: 'Male'
}
const address = {
    street: 'George Street',
    city: 'Manila'
}
const personData = {
    ...person, 
    ...address, 
    profession: 'Software Engineer'
}
console.log(personData);