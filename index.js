
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

const client = new Client({
 intents:[GatewayIntentBits.Guilds]
});

app.get('/', (req,res)=>{
 res.render('index', {
   storeName: process.env.STORE_NAME || 'H7 STORE'
 });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Website running on port ${PORT}`);
});

client.once('ready', ()=>{
 console.log(`${client.user.tag} online`);
});

client.login(process.env.DISCORD_TOKEN);
