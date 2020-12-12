const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .addField(`** <a:tm:752411628984598578>  Yetkili Komutları  <a:tm:752411628984598578>**`, `
**<a:ki:752418534105022484> ban ** : Sunucudan Yasaklar!
**<a:ki:752418534105022484>unban** : Yasağını Kaldırır!
**<a:ki:752418534105022484>kick** : Sunucudan Kickler!
**<a:ki:752418534105022484>emojiler** : Sunucudaki Emojileri Listeler!
**<a:ki:752418534105022484> sil** : Mesaj Siler!
**<a:ki:752418534105022484> rolbilgi** : Rol Bilgilerini Gösterir!
**<a:ki:752418534105022484> oylama** : Oylama Yapar!
**<a:ki:752418534105022484> hatırlat** : Hatırlatma Yapar!
**<a:ki:752418534105022484> süreliban** : Süreli Yasaklar!
**<a:ki:752418534105022484> temizle-üye** : Kişinin Mesajlarını Siler!
**<a:ki:752418534105022484> çekiliş** : Çekiliş Yapar!
**<a:ki:752418534105022484> kanalkilit** : Kanalı Süreli Kilitler!
**<a:ki:752418534105022484> rolver** : Kişiye Rol Verir!
**<a:ki:752418534105022484> rolal** : Kişinin Rolünü Alır!
**<a:ki:752418534105022484> terfi** : Kişiyi Terfi Eder!
**<a:ki:752418534105022484> yavaşmod** : Süreli Yavaş Modu Açar!
**<a:ki:752418534105022484> uyarı** : Uyarı Sistemini Gösterir!`) 
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
  name: 'yetkili',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   