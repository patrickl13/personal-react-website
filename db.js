var classes  = require('./data/classes.json');
var education = require('./data/education.json');
var projects  = require('./data/projects.json');

module.exports = function() {
    return {
        classes  : classes,
        education : education,
        projects  : projects,
    }
}