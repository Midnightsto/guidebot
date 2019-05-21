exports.run = async (client, message, args, level) => {
  const snekfetch = require('snekfetch');
  const Discord = require("discord.js");
    try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
            .query({ limit: 800000000000 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter("Memes provided by r/dankmemes")
              if(message.author.id === '537707254313517056')
     message.channel.send("ur mom gay")
        message.channel.send(embed)
         console.log("Nicu used commie")
    } catch (err) {
        return console.log(err);
    }
    }
