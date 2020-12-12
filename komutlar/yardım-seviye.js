const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField(' **<a:xp:752463084689555496> Kullanıcı Komutları <a:xp:752463084689555496>**',`
**<a:xp:752463084689555496> seviye** : Seviyenizi Gösterir!
**<a:xp:752463084689555496> seviye-ayarlar** : Seviye komutlarının Ayarlarını Gösterir!
**<a:xp:752463084689555496> seviye-aç** : Seviye Sistemini Açar!
**<a:xp:752463084689555496> seviye-kapat** : Seviye Sistemini Kapatır!
**<a:xp:752463084689555496> seviye-log** : Seviye Log Kanalını Ayarlar!
**<a:xp:752463084689555496> seviye-rol** : Seviye Ödülünü Ayarlar!
**<a:xp:752463084689555496> seviye-xp** : Mesaj Başına Verilen Xpyi Ayarlar!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'sevsis',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   