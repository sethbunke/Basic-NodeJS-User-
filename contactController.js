// Import contact model
User = require('./contactModel');

// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: contacts
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var contact = new User();
    contact.loginName = req.body.loginName ? req.body.loginName : contact.loginName;
    contact.firstName = req.body.firstName ? req.body.firstName : contact.firstName;
    contact.lastName = req.body.lastName ? req.body.lastName : contact.lastName;
    contact.fullName = req.body.fullName ? req.body.fullName : contact.fullName;    
    contact.emailAddress = req.body.emailAddress;
    contact.jobTitle = req.body.jobTitle;

    // save the contact and check for errors
    contact.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: 'New user created!',
            data: contact
        });
    });
};


// Handle view contact info
exports.view = function (req, res) {
    User.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: contact
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {

    User.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);

        contact.loginName = req.body.loginName ? req.body.loginName : contact.loginName;
        contact.firstName = req.body.firstName ? req.body.firstName : contact.firstName;
        contact.lastName = req.body.lastName ? req.body.lastName : contact.lastName;
        contact.fullName = req.body.fullName ? req.body.fullName : contact.fullName;    
        contact.emailAddress = req.body.emailAddress;
        contact.jobTitle = req.body.jobTitle;

        // save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: contact
            });
        });
    });
};


// Handle delete contact
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};