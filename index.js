// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes")


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({  
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
//const con = 'mongodb://todouser1:todouser11@ds151393.mlab.com:51393/todo1';
mongoose.connect('mongodb://todo1user:todo1user@ds151393.mlab.com:51393/todo1', { useNewUrlParser: true });

var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;


// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});