const fs = require("fs");
module.exports.config = {
	name: "biryani",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "biryani",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("BIRYANI")==0 || event.body.indexOf("Syapa")==0 || event.body.indexOf("syapa")==0 || event.body.indexOf(".biryani")==0) {
		var msg = {
				body: "💝 YE LO BBY BIRYANI KHAO 🥗\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲 𝗠𝗿..𝐂𝐇𝐔𝐙𝐀❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Syapa.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
