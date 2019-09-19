var classes  = require('./data/classes.json');
var education = require('./data/education.json');
var projects  = require('./data/projects.json');
var experience = require('./data/experience.json');

module.exports = function() {
    return {
        classes  : classes,
        education : education,
        projects  : projects,
        experience : experience
    }
}