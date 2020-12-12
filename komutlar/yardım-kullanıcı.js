const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**<a:ylz:752408426021257216> Kullanıcı Komutları <a:ylz:752408426021257216>**',`
**<a:be:752434503204732998> avatar** : Avatarını Gösterir!
**<a:be:752434503204732998> sunucubilgi** : Sunucu Bilgilerini Gösterir!
**<a:be:752434503204732998> havadurumu** : HavaDurumunu Gösterir!
**<a:be:752434503204732998> yasaklar** : Yasaklı Kişileri Gösterir!
**<a:be:752434503204732998> üyedurum** : Üye Durum Gösterir!
**<a:be:752434503204732998> döviz** : Döviz Kurlarını Gösterir!
**<a:be:752434503204732998> saat** : Saati Gösterir!
**<a:be:752434503204732998>  youtube** : Aradığınızı Bulur!
**<a:be:752434503204732998> servericon** : Sunucu Resmini Gösterir!
**<a:be:752434503204732998> hesapla** : Toplama Yapar!
**<a:be:752434503204732998> kısalt** : Link Kısaltır!
**<a:be:752434503204732998> banner** : Yazınızı Banner Yapar!
**<a:be:752434503204732998> korona** : Korona Durumunu Gösterir!
**<a:be:752434503204732998> kanalbilgi** : Kanalın Bilgisini Gösterir!
**<a:be:752434503204732998> istatistik** : Bot İstatistiklerini Gösterir!
**<a:be:752434503204732998> canlıdestek** : Canlı Destek Açarsınız!`)
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
  name: 'kullanıcı',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   