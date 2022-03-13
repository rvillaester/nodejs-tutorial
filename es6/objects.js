// ------------------ function -----------------
// this is the old way
const person = {
    name: 'Rey',
    eat: function(){
        console.log('eating');
    }
}
person.eat();
// ES6 way
const personES6 = {
    name: 'Rey',
    eat(){
        console.log('eating ES6');
    }
}
personES6.name = 'Rey New';
console.log(personES6.name);
const targetMember = 'eat';
personES6[targetMember]();

// ------------------ destructuring -----------------
const address = {
    postcode: 1004,
    city: 'Kidapawan',
    street: 'Balindog',
    country: 'Philippines'
}

const {postcode, city, street: st, country} = address;
console.log(`${postcode} - ${city} - ${st} - ${country}`);

