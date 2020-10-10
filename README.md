### Something Random On Discord
  
- This Package Is Officially By CTK WARRIOR#7923
- I Just Created V2 With More Functions And Fixed All Errors!
- Stable Version : Current Version
- Full : Something Random On Discord V2

# Usage
```js
const Discord = require("discord.js");
const Random = require("srod-v2");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot Is Ready With Srod-v2!");
});

client.on("message", async message => {
    if (message.content.toLowerCase() === "meme") {
        let Meme = Random.GetMeme();
        return message.channel.send(Meme);
    }
});

client.login("Put Your Epic Bot Token Here!");
```
![](https://cdn.discordapp.com/attachments/763294769974607912/763295959761289246/unknown.png)


## DOCUMENTATION

- All Functions Return Data As JSON Embeds (Discord Message Embeds)
- Color Information - Use CAPS For Name (Blue : BLUE , Orange : ORANGE) , Embed Color Will Be Random If No Color Provided , Black If Your Provided Color Is Invalid!

**GetMeme(EmbedColor):** Return A Random Meme (Image, Title, Link, Timestamp, Color) | EmbedColor Is Optional!
```js
  let Meme = await Random.GetMeme("BLUE");
  message.channel.send(Meme);
```

**GetJoke(EmbedColor):** Return A Random Joke (Description, Timestamp, Color) | EmbedColor Is Optional!
```js
  let Joke = await Random.GetJoke("BLUE");
  message.channel.send(Joke);
```

**GetAdvice(EmbedColor):** Return A Random Advice (Description, Timestamp, Color) | EmbedColor Is Optional!
```js
  let Advice = await Random.GetAdvice("BLUE");
  message.channel.send(Advice);
```

**GetFact(EmbedColor):** Return A Random Fact (Description, Timestamp, Color) | EmbedColor Is Optional!
```js
  let Fact = await Random.GetFact("BLUE");
  message.channel.send(Fact);
```

**GetWhy(EmbedColor):** Return A Random Why Line (Description, Timestamp, Color) | EmbedColor Is Optional!
```js
  let Why = await Random.GetWhy("BLUE");
  message.channel.send(Why);
```

**Lmgtfy(Search, EmbedColor):** Return Lmgtfy Link Of Your Search (Description, Timestamp, Color) | EmbedColor Is Optional!
```js
  let Lmgtfy = await Random.Lmgtfy("Discord", "BLUE");
  message.channel.send(Lmgtfy);
```

**Hastebin(String, EmbedColor):** Return Hastebin Link Of Your String (Description, Timestamp, Color) | EmbedColor Is Optional!
```js
  let Hastebin = await Random.Hastebin("Discord", "BLUE");
  message.channel.send(Hastebin);
```

**RandomString(Length, EmbedColor):** Return A Random String Of Your Given Length (Description, Timestamp, Color) | EmbedColor Is Optional!
```js
  let RandomString = await Random.RandomString("10", "BLUE");
  message.channel.send(RandomString);
```

**DiscordSpoiler(String, EmbedColor):** Return Your String As Discord Spoiler (Description, Timestamp, Color) | EmbedColor Is Optional!
```js
  let DiscordSpoiler = await Random.DiscordSpoiler("Discord", "BLUE");
  message.channel.send(DiscordSpoiler);
```

**Tweet(TweetOwnerName, TweetText, EmbedColor):** Return A Fake Generated Tweet Image (Image, Timestamp, Color) | EmbedColor Is Optional!
```js
  let Tweet = await Random.Tweet("Legendary Emoji", "Hello, I Am Legendary Emoji!", "BLUE");
  message.channel.send(Tweet);
```

**MinecraftAchievement(AchievementText, EmbedColor):** Return A Fake Generated Minecraft Achievement Image (Image, Timestamp, Color) | EmbedColor Is Optional!
```js
  let MinecraftAchievementEmbed = await Random.MinecraftAchievement("1st Npm Package!", "BLUE");
  message.channel.send(MinecraftAchievementEmbed);
```

**PornhubComment(CommentOwnerName, CommentOwnerAccountImage, CommentText, EmbedColor):** Return A Fake Generated Pornhub Comment Image (Image, Timestamp, Color) | EmbedColor Is Optional!
```js
  let PornhubComment = await Random.PornhubComment("Legendary Emoji", "https://cdn.discordapp.com/avatars/576893842058641412/f5abf8b3b9c9524ff5d13388ba8fbd99.png?size=128", "Damn, Hot!", "BLUE");
  message.channel.send(PornhubComment);
```

**GetAnimeImage(Thing, EmbedColor):** Return Your Given Anime Thing! (Image, Timestamp, Color) - Available : [Click Me](https://hatebin.com/qmyksgdtcn) | EmbedColor Is Optional!
```js
  let GetAnimeImage = await Random.GetAnimeImage("Kiss", "BLUE");
  message.channel.send(GetAnimeImage);
```

**GetAnimalImage(Thing, EmbedColor):** Return Your Given Animal Thing! (Image, Timestamp, Color) - Available : [Click Me](https://hatebin.com/yadparbuak) | EmbedColor Is Optional!
```js
  let GetAnimalImage = await Random.GetAnimalImage("Cat", "BLUE");
  message.channel.send(GetAnimalImage);
```

# Support , Owners , Credit , Etc

Owners => CTK WARRIOR#7923 , Legendary Emoji#1742

Credit => CTK WARRIOR#7923

=== Links ===

Support & Ctk's Server => [Join Or Die Tmr](https://withwin.in/dbd)

Youtube Channel (Ctk) => [Click Me](https://youtube.com/c/dbdandmore)

Application (Playstore) (Ctk) => [Click Me](https://play.google.com/store/apps/details?id=com.yato2050.discord&hl=en_IN)

Patreon (Ctk) => [Click Me](https://www.patreon.com/dbdandmore)
