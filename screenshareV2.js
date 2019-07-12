const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "!";



client.on('message', message => {

	if (!(message.author.bot) && message.channel.type === 'dm') return;

    if (message.content.startsWith(`${prefix}screenlink`) || message.content.startsWith(`${prefix}sl`)) {

    var voiceChannel = message.member.voiceChannel;

	if(!voiceChannel) return message.channel.send("You must be in a room first")

    let embed = new Discord.RichEmbed ()
	.setAuthor(`${message.guild.name}`, message.guild.iconURL)
	.setColor('#000001')
    .setTitle("**Screen Link**")
	.addField(`__This Link For__ **${message.member.voiceChannel.name}** __Room__`,`[Click here to screenshare!](https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id})`)
	.addField(`Room Name : **${message.member.voiceChannel.name}**`,`Requested By : <@${message.author.id}>`)
	embed.setFooter(`You must be in the same channel for using the link.`, message.author.avatarURL)
    message.channel.send(embed);

    }
});



client.login('token here');
