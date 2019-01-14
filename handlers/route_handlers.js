var express = require('express');


exports.landingPage = function(req,res) {
    console.log('I am on landing page');

//     console.log(req.body.challenge);
//     res.setHeader('Content-Type', 'application/json');
//    res.send(JSON.stringify({
//     challenge : req.body.challenge
//    }));



const { RTMClient } = require('@slack/client');
// SNIP: the initialization code shown above is skipped for brevity

// An access token (from your Slack app or custom integration - usually xoxb)
const token = 'xoxp-289559311893-471620757398-521704112199-f6dd09c68c83e5530bc008305dc214df';

// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
rtm.start();




rtm.on('message', (message) => {
  // For structure of `message`, see https://api.slack.com/events/message

  // Skip messages that are from a bot or my own user ID
  if ( (message.subtype && message.subtype === 'bot_message') ||
       (!message.subtype && message.user === rtm.activeUserId) ) {
    return;
  }

  // Log the message
  console.log(`(channel:${message.channel}) ${message.user} says: ${message.text}`);
});




    
};

exports.home = (req,res) => {
    console.log('I am on home page');


    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: "i am home page" }));
    
};