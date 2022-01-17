const app = require('express')();
app.get('/', (req, res) => {
    res.send('');
});
const keep_alive = require("./keep-alive.js")
const aoijs = require("aoi.js")
var fs = require('fs');
const bot = new aoijs.Bot({
    token: process.env['token'],
    prefix:"PREFİXİNİZ",//prefix
    mobile: false,
    fetchInvites: true
})

//Eventler
bot.onJoined()
bot.onLeave()
bot.onMessage()
bot.loadCommands(`./komutlar/`) //Command Handlerimizi Ayarladık
//komutları alta yazın

//Örnek Komut
bot.command({
  name: "selam",
  code: `Selam dünya!`
})

//komutları üste yazın

//Hazır Event
bot.readyCommand({
    channel: "",
    code: `
         $log[------------------------------------------]
         $wait[1s]
         $log[Toplam Sunucu Sayısı: $serverCount]
         $wait[1s]
         $log[Toplam Kullanıcı Sayısı: $allMembersCount]
         $wait[1s]
         $log[Botun İsmi: $userTag[$clientID]]]
         $wait[1s]
         $log[----------------Bot-Açıldı----------------]
        
 ` 
}) //Bot Açılınca Konsola Hoş Bi İstatistik Atıcak

bot.status({
    text: "istediğiniz durumu yazın",//buraya durum yazısı
    type: "LISTENING",//buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz
    status: "idle",//buraya status kısmı dnd idle online şeklinde yapabilirsiniz
    time: 15 //burayı elleme durum değişme süresi
})

//variablelar
bot.variables({
variable:"DEĞER", //son variable'da virgül olmaz
variable:"DEĞER2"
})
