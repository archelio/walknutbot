const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**Müzik Komutları**',`
**<a:at:752412720728506379>oynat** : İstediğiniz Müziği Oynatır!
**<a:at:752412720728506379> durdur** : Oynatılan Müziği Durdurur!
**<a:at:752412720728506379> geç** : Sıradaki Şarkıya Geçer!
**<a:at:752412720728506379> ses** : Ses Seviyesini Belirler!
**<a:at:752412720728506379> tekrar** : Çalan şarkı bitince tekrar çalar!
**<a:at:752412720728506379> kuyruk** : Sıradaki Şarkıları Gösterir!
**<a:at:752412720728506379> devamet** : Durdurulan Müziği Oynatır!
**<a:at:752412720728506379> oynatılan** : Şuan da Çalan Müziği Gösterir!
**<a:at:752412720728506379> ping** : Botun Pingini Gösterir!
**<a:at:752412720728506379> kapat** : Oynatılan Müziği Kapatır!`)
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
  name: 'müzik',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   