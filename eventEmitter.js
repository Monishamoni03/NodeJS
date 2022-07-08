var event = require('events');
var util = require('util');

var Subject = function(name) {
    this.name = name;
};

util.inherits(Subject, event.EventEmitter);

var maths = new Subject('Maths');
var physics = new Subject('Physics');
var subjects = [maths, physics];

subjects.forEach(function(book) {
    book.on('availableBooks', function(message) {
        console.log(book.name + ' book ' + message);
    });
});

maths.emit('availableBooks', 'available');