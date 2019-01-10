const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

var routers = require('./routers/router.js');

app.use('/',routers);



app.listen(PORT, function() {
    console.log("App is running on port " + PORT);
});