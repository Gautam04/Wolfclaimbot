const TelegramBot = require('node-telegram-bot-api');
const token = '1089775762:AAHnAsOfOycSSOFryMay6lAoiVMFBmDobqk';
const bot = new TelegramBot(token, {polling: true});

var claims ={}


function findEmoji(message){
	message = message.toLowerCase();
	switch(message)
	{
		case "lowly": 
		case "villager": 
		case "lowly villager":
			return "\u{1F468}";
		break;
		case "drunk":
			return "\u{1F37B}";
		break;
		case "seer":
			return "\u{1F473}";
		break;
		case "harlot":
			return "\u{1F48B}";
		break;
		case "bh": 
		case "beholder":
			return "\u{1F441}";
		break;
		case "gunner":
			return "\u{1F52B}";
		break;
		case "ga":
		case "guardian angel":
			return "\u{1F47C}";
		break;
		case "fool":
			return "\u{1F0CF}";
		break;
		case "mason": 
		case "lone mason":
			return "\u{1F477}";
		break;
		case "detective":
		case "det":
			return "\u{1F575}";
		break;
		case "apprentice": 
		case "apprentice seer":
			return "\u{1F647}";
		break;
		case "ch": 
		case "cultist hunter":
			return "\u{1F482}";
		break;
		case "cupid":
			return "\u{1F3F9}";
		break;
		case "hunter": 
		case "th":
			return "\u{1F3AF}";
		break;
		case "clumsy": 
		case "clumsy guy":
			return "\u{1F915}";
		break;
		case "blacksmith":
			return "\u{2692}";
		break;
		case "prince":
			return "\u{1F48D}";
		break;
		case "mayor":
			return "\u{1F396}";
		break;
		case "oracle":
			return "\u{1F300}";
		break;
		case "ww":
		case "werewolf":
		case "wolf":
			return "\u{1F43A}";
		break;
		case "sorc":
		case "sorcerer":
			return "\u{1F52E}";
		break;
		case "alpha":
		case "alpha wolf":
			return "\u{26A1}";
		break;
		case "cub":
		case "wolf cub":
			return "\u{1F436}";
		break;
		case "lycan":
			return "\u{1F43A}\u{1F31D}"
		break;
		case "prowler":
			return "\u{1F989}";
		break;
		case "mystic":
			return "\u{2604}";
		break;
		case "trickster":
		case "trickster wolf":
			return "\u{1F411}";
		break;
		case "FA":
		case "Fallen Angel":
			return "\u{1F47C}\u{1F43A}";
		break;
		case "tanner":
			return "\u{1F47A}";
		break;
		case "cult":
		case "cultist":
			return "\u{1F464}";
		break;
		case "thief":
			return "\u{1F608}";
		break;
		case "puppet":
		case "puppet master":
		case "puppetmaster":
			return "\u{1F574}";
		break;
		case "dg":
		case "doppleganger":
			return "\u{1F3AD}";
		break;
		case "sk":
		case "serial killer":
		case "serial":
			return "\u{1F52A}";
		break;
		case "arso":
		case "arsonist":
			return "\u{1F525}";
		break;
		case "necro":
		case "necromancer":
			return "\u{26B0}";
		break;
		case "monarch":
			return "\u{1F451}";
		break;
		case "paci":
		case "pacifist":
			return "\u{262E}";
		break;
		case "wise elder":
		case "we":
			return "\u{1F4DA}";
		break;
		case "sandman":
		case "sand nigga":
		case "sandnigga":
			return "\u{1F4A4}";
		break;
		case "wolfman":
			return "\u{1F468}\u{1F31A}";
		break;
		case "martyr":
			return "\u{1F530}";
		break;
		case "alchemist":
			return "\u{1F375}";
		break;
		case "squire":
			return "\u{1F6E1}";
		break;
		case "beauty":
		case "azhagi":
			return "\u{1F485}";
		break;
		case "storm":
		case "stormbringer":
		case "stormnigga":
			return "\u{1F329}";
		break;
		case "traitor":
			return "\u{1F595}";
		break;
		case "wild":
		case "wild child":
		case "wc":
			return "\u{1F476}";
		break;
		case "cursed":
			return "\u{1F63E}";
		break;
		case "black wolf":
		case "blackwolf":
			return "\u{1F43A}\u{1F311}";
		break;
		default: return " ";

	}
}


bot.onText(/\/reset/,(msg,match)=>{
	claims = {};
	const chatId = msg.chat.id;
	bot.sendMessage(chatId,"Claims have been reset"); 
});

bot.onText(/\/claim (.+)?/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; 
  
  sender = msg.from.first_name;
  console.log(sender)
  // claims=claims.concat(sender," claims ",resp,"\n");
  claims[sender]=resp
  // bot.sendMessage(chatId,claims);
  
});

bot.onText(/\/claim/,(msg,match)=>{
	const chatId = msg.chat.id;
	options = {parse_mode: 'Markdown'};
	if(Object.keys(claims).length === 0)
		bot.sendMessage(chatId,"No claims yet");
	else
	{		
		var claim_message = ""
		for(key in claims)
		{
			var text = claims[key];
			var emoji = findEmoji(text);
			console.log(key);
			claim_message = claim_message.concat("*",key,"*"," claims ",text,emoji,"\n");
		}
		console.log(claim_message)
		bot.sendMessage(chatId,claim_message,options);
		console.log(claims)
		// bot.sendMessage(chatId, claims);
	}
});


