const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "!";


client.on('message', message => {

  if (!message.author.bot && message.channel.type === 'dm') return;

  const voiceChannel = message.member.voiceChannel;

  if (message.content.startsWith(`${prefix}sl`) || message.content.startsWith(`${prefix}screenlink`)) {
    if (!voiceChannel) return message.channel.send("You must be in a room first")

    let embed = new Discord.RichEmbed()
      .setAuthor(`${message.guild.name}`, message.guild.iconURL)
      .setColor('#000001')
      .setTitle("**Screen Link**")
      .addField(`https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id}`, `Room Name : **${message.member.voiceChannel.name}**`)
      .setDescription(`__This Link For__ **${message.member.voiceChannel.name}** __Room__`)
    embed.setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed);

  }
});



client.login('token here');
