const SlackBot = require('slackbots');
const axios = require('axios');


const bot = new SlackBot({
 token: 'xoxb-520780954817-520787491121-94Uoyiy1ocbX12ex3J36Kcsu',
 name: 'abode_bot'
});

// Start Handler
bot.on('start', () => {
 const params = {
   icon_emoji: ':smiley:'
 };

 bot.postMessageToChannel(
   'devops',
   'Get Ready To Laugh With @abode_bot!',
   params
 );
});

// Error Handler
bot.on('error', err => console.log(err));

// Message Handler
bot.on('message', data => {
 if (data.type !== 'message') {
   return;
 }
console.log(data);
console.log(data.ts);

console.log();
handleMessage(data.text, data.ts, data.channel, bot.name);
});


// Respons to Data
function handleMessage(message, ts_value, channel, bot_name) {
 if (message.includes(' chucknorris')) {
   chuckJoke();
 } else if (message.includes(' yomama')) {
   yoMamaJoke();
 } else if (message.includes(' random')) {
   randomJoke();
 } else if (message.includes(' help')) {
   runHelp();
 }
  else if (message.includes(' hello')) {
   thread_msg(ts_value, channel, bot_name);
 }
}

// Tell a Chuck Norris Joke
function chuckJoke() {
 axios.get('http://api.icndb.com/jokes/random').then(res => {
   const joke = res.data.value.joke;

   const params = {
     icon_emoji: ':laughing:'
   };

   bot.postMessageToChannel('devops', `Chuck Norris: ${joke}`, params);
 });
}

// Tell a Yo Mama Joke
function yoMamaJoke() {
 axios.get('http://api.yomomma.info').then(res => {
   const joke = res.data.joke;

   const params = {
     icon_emoji: ':laughing:'
   };

   bot.postMessageToChannel('devops', `Yo Mama: ${joke}`, params);
 });
}

// Tell a Random Joke
function randomJoke() {
 const rand = Math.floor(Math.random() * 2) + 1;
 if (rand === 1) {
   chuckJoke();
 } else if (rand === 2) {
   yoMamaJoke();
 }
}

// Show Help Text
function runHelp() {
 const params = {
   icon_emoji: ':question:'
 };

 bot.postMessageToChannel(
   'devops',
   `Type @abode_bot with either 'chucknorris', 'yomama' or 'random' to get a joke`,
   params
 );
}

function thread_msg(thread_ts, channel, bot_name) {
 var api= 'https://slack.com/api/chat.postMessage?';
 var token= 'token=xoxp-520780954817-522787814374-522833543430-731bd7ec3cad5b06695dd241f9728899&';
 var channel_id='channel=' + channel + '&';
 var thread_tss = 'thread_ts=' + thread_ts + '&';
 var text='text=Hi,This%20is%20a%20thread%20msg&';
 var pret='pretty=1&';
 var botname='username='+bot_name;
 var path = api+token+channel_id+text+thread_tss+pret+botname;
 console.log(path);
  axios.get(api+token+channel_id+text+thread_tss+pret+botname);
}