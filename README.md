# Srod V2

- Package [V1](https://www.npmjs.com/package/something-random-on-discord) Was By CTK WARRIOR#7923 ([Discord Server](https://discord.gg/7efH8yYpqK))
- Current : Something Random On Discord V2 (Status: Working)

### Example
```js
//Discord.js Bot - discord.js.org - npm i discord.js
const Discord = require("discord.js"), Random = require("srod-v2");
const client = new Discord.Client();

client.on("ready", () => console.log("Bot Is Ready With Something Random On Discord V2 💙"));

client.on("message", async message => {
    if (message.content.toLowerCase() === "meme") {
        const Meme = await Random.GetMeme();
        return message.channel.send(Meme);
    };
});

client.login("Put Your Epic Bot Token Here!");
```
![](https://cdn.discordapp.com/attachments/763294769974607912/763295959761289246/unknown.png)

### Why Srod V2?

- Fast & Many Functions
- Quick Updates

### Documentation

- All Functions Return Data As [JSON](https://www.json.org/) Embeds
- Color - [Any From This List](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable) | Black If Invalid Color Provided
- Link - [Click Me (Recommended)](https://bit.ly/34tvqau) Or [Scroll Down](https://bit.ly/34tvqau)

### Donate

_Donations Will Help Us To Maintain This Package 💙_

- [Patreon (Ctk)](https://www.patreon.com/dbdandmore)
- [Paypal (Emoji)](https://www.paypal.com/paypalme/LegendEmoji)

### Information

_Note : This Package Is Using Many Websites For Getting Data, Credit Goes To Websites Owners!_

- This Package Is Made With [💙](https://bit.ly/34tvqau) By [Emoji](https://discord.gg/umMpnqS) & [Ctk](https://discord.gg/7efH8yYpqK)

- [Documentation](https://bit.ly/34tvqau) - [Click Me](https://github.com/LegendaryEmoji/srod-v2/wiki)

- Thank You For Reading & Using [This Package](https://www.npmjs.com/package/srod-v2) ;)
