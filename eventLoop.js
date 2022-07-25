var event = require('events');
var eventEmitter = new event.EventEmitter();
var eventHandler = function message() {
    console.log('Hello World');
    eventEmitter.emit('Error message');
}

eventEmitter.on('connection', eventHandler);
eventEmitter.on('Error message', () => {
    console.log('Message received');
});

eventEmitter.emit('connection');
console.log('The End');