

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('750672106290937977') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#0066FF')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setDescription(`<a:bbb:752408426021257216> | **${ayarlar.prefix}yetkili** Yetkili Komutları\n<a:bbb:752408426021257216> | **${ayarlar.prefix}sunucu** Sunucu Komutları\n<a:bbb:752408426021257216> | **${ayarlar.prefix}kullanıcı** Kullanıcı Komutları\n<a:bbb:752408426021257216>   | **${ayarlar.prefix}kayıt** Kayıt Komutları\n<a:bbb:752408426021257216>  | **${ayarlar.prefix}sevsis** Seviye Komutları\n<a:bbb:752408426021257216>    | **${ayarlar.prefix}ekonomi** Ekonomi Komutları\n<a:bbb:752408426021257216>  | **${ayarlar.prefix}invite** Davet Komutları\n<a:bbb:752408426021257216>   | **${ayarlar.prefix}müzik** Müzik Komutları\n<a:bbb:752408426021257216> | **${ayarlar.prefix}koruma** Koruma Komutları`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage('https://cdn.discordapp.com/attachments/745230123925635132/752256617361309787/20200906_225832_0000.png')  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};








