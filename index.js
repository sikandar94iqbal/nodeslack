const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
var bodyParser = require("body-parser");
var routers = require('./routers/router.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/',routers);



app.listen(PORT, function() {
    console.log("App is runnin on port " + PORT);
});