var mongoose = require('mongoose');

// Setup schema
var contactSchema = mongoose.Schema({
    loginName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    jobTitle: String,    
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
var Contact = module.exports = mongoose.model('user', contactSchema);


module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}