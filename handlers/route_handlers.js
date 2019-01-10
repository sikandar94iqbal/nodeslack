var express = require('express');


exports.landingPage = function(req,res) {
    console.log('I am on landing page');

    console.log(req.body.challenge);
    res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify({
    challenge : req.body.challenge
   }));
    
};

exports.home = (req,res) => {
    console.log('I am on home page');


    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: "i am home page" }));
    
};