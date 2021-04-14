const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const client = new Client();
const prefix = '~';

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        const { round } = await fetch('https://drand.cloudflare.com/public/latest').then(response => response.json());
        message.channel.send(`Success! Here's your useless round code: ` + round);
        console.log("Pinging the Cloudflare Drand API...");
        console.log("Successful...");
        console.log("Sending data to user...");
        console.log("All commands completed successfully.");
    };
    if (command === 'random') {
        const { randomness } = await fetch(`https://drand.cloudflare.com/public/latest`).then(response => response.json());
        message.channel.send(randomness);
        console.log("Pinging the Cloudflare Drand API...");
        console.log("Successful...");
        console.log("Sending data to user...");
        console.log("All commands completed successfully.");
    };
    if (command === 'r-int') {
        message.channel.send("This feature is currently in-development. Cloudflare doesn't support it yet, and random.org's API doesn't respond well with Discord bots. Sorry about that...");
    }
});


client.login('ODIyMjE3MzMwNTAyMTM5OTE1.YFPDjw.KMjU84wRgVrtGfjYv0dZSRzZxQw');