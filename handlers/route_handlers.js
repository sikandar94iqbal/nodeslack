var express = require('express');


exports.landingPage = function(req,res) {
    console.log('I am on landing page');

//     console.log(req.body.challenge);
//     res.setHeader('Content-Type', 'application/json');
//    res.send(JSON.stringify({
//     challenge : req.body.challenge
//    }));


const { RTMClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - usually xoxb)
const token = 'xoxp-289559311893-471620757398-523872088087-81fa11717cece6443c36732e80ef57ab';

// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
rtm.start();

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C1232456';

// The RTM client can send simple string messages
rtm.sendMessage('Hello there', conversationId)
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);


    
};

exports.home = (req,res) => {
    console.log('I am on home page');


    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: "i am home page" }));
    
};