var express = require('express');


exports.landingPage = function (req, res) {
  console.log('I am on landing page');

  //console.log(req.body.challenge);
  res.setHeader('Content-Type', 'application/json');
  //console.log(req);
  res.send(JSON.stringify("hello"));



};

exports.landingPagePost = function (req, res) {
  console.log('I am on landing page');

  //console.log(req.body.challenge);
  res.setHeader('Content-Type', 'application/json');
  //console.log(req.params.Message);
  console.log(req.body.Message);
  //console.log(req.query);
  res.send(JSON.stringify("hello"));



};

exports.home = (req, res) => {
  console.log('I am on home page');

  var userName = req.body.userName;
  var botPayload = {
    text: 'Hello ' + userName + ', Welcome to Abode ! I\'ll be your guide.'
  };
  // Loop otherwise..
  res.status(200).json(botPayload);



};
