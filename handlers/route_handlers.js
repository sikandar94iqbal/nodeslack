var express = require('express');


exports.landingPage = function(req,res) {
    console.log('I am on landing page');

//     console.log(req.body.challenge);
//     res.setHeader('Content-Type', 'application/json');
//    res.send(JSON.stringify({
//     challenge : req.body.challenge
//    }));

const token = process.env.SLACK_BOT_TOKEN
const Slack = require('slack')
const bot = new Slack({token})
 
// logs {args:{hyper:'card'}}
bot.api.test({hyper:'card'}).then(console.log)

};

exports.home = (req,res) => {
    console.log('I am on home page');


    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: "i am home page" }));
    
};