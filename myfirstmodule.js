module.exports.name = function() {
    return "Big Jamo";
}

const firstModule = require('./myfirstmodule');
console.log('Results: ' + firstModule.name());
