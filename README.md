# Srod V2

- Package [V1](https://bit.ly/34tvqau) Was By [CTK WARRIOR#7923](https://bit.ly/34tvqau) ([Discord Server](https://discord.gg/7efH8yYpqK))
- Current : Something Random On Discord V2

### Example
```js
//Discord.js Bot - discord.js.org - npm i discord.js
const Discord = require("discord.js");
const Random = require("srod-v2");
const client = new Discord.Client();

client.on("ready", async () => {
    await console.log("Bot Is Ready With Something Random On Discord V2 💙");
});

client.on("message", async message => {
    if (message.content.toLowerCase() === "meme") {
        let Meme = await Random.GetMeme();
        return message.channel.send(Meme);
    };
});

client.login("Put Your Epic Bot Token Here!");
```
![](https://cdn.discordapp.com/attachments/763294769974607912/763295959761289246/unknown.png)

### Why Srod V2?

- Not Sure...

### Documentation

- All [Functions](https://bit.ly/34tvqau) Return Data As [Json](https://bit.ly/34tvqau) Embeds (Discord Message Embeds)
- Color - [Hex Code](https://bit.ly/34tvqau) , Name (In CAPS) | Black If Provided Color Is Invalid
- Link - [Click Me (Recommended)](https://bit.ly/34tvqau) Or [Scroll Down](https://bit.ly/34tvqau)

### Donate

_Donations Will Help Us To Maintain This Package 💙_

- [Patreon (Ctk)](https://www.patreon.com/dbdandmore)
- [Paypal (Emoji)](https://www.paypal.com/paypalme/LegendEmoji)
- [Patreon (Emoji)](https://www.patreon.com/LegendaryEmoji)
- [Ko-Fi (Emoji)](https://ko-fi.com/LegendaryEmoji)

### Information

_Note : This Package Is Using Many Websites For Getting Data, Credit Goes To Websites Owners!_

- This Package Is Made With [💙](https://bit.ly/34tvqau) By [Emoji](https://bit.ly/34tvqau) & [Ctk](https://bit.ly/34tvqau)

- [Documentation](https://bit.ly/34tvqau) - [Click Me](https://github.com/LegendaryEmoji/srod-v2/wiki)

- Thank You For Reading & Using [This Package](https://www.npmjs.com/package/srod-v2) ;)
