import EventEmitter from 'events';

const emitter = new EventEmitter();

// listen to 'eating' event
emitter.on('eating', event => {
    const {name, age} = event;
    console.log(`${name} who is ${age} years of age is eating`);
});

// raise an event
emitter.emit('eating', {name: 'Rey', age: 23});

