var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8000, function() {
    console.log("Server up and running on port 8000");
})