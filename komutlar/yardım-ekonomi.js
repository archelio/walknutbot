 const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
   .setColor('GRAY')
.addField(' <a:ek:752468860300558346> **Ekonomi Komutları**<a:ek:752468860300558346>',`
**<a:ek:752468860300558346> emoji-yakalamaca** : Puan Oyunu!
**<a:ek:752468860300558346> gönder** : Puan Gönderir!
**<a:ek:752468860300558346> günlük** : Günlük Puan Alırsın!
**<a:ek:752468860300558346> kumar** : Sunucudaki Emojileri Listeler!
**<a:ek:752468860300558346> puan** : Puanınızı Gösterir!
**<a:ek:752468860300558346> puan-ver** : Puan Verir (Bot Sahibi Kullanabilir)!
**<a:ek:752468860300558346> satın-al** : Marketten Bişey Alırsınız!(bakım şuan)
**<a:ek:752468860300558346> çal** : Cepcilik Yaparsınız!`)
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
  name: 'ekonomi',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   