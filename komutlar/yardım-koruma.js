const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField(' **<a:gvn:752459557313314857>  Güvenlik Komutları  <a:gvn:752459557313314857>**',`
**<a:gvn:752459557313314857> rol-koruma** : Rolleri Korur!
**<a:gvn:752459557313314857> self-koruma** : Self Botları Susturur!
**<a:gvn:752459557313314857> ddos-sistemi** : ddos Koruma Sistemini Aktif Eder!
**<a:gvn:752459557313314857> sağtıkban** : Sağtık Ban Korumasını Aktif Eder!
**<a:gvn:752459557313314857> kanal-koruma** : Kanalları Korur!
**<a:gvn:752459557313314857> anti-raid** : Sunucuya Eklenen Botları Kickler!`)
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
  name: 'koruma',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   