### Something Random On Discord
  
- This Package Is Officially By CTK WARRIOR#7923
- I Just Created V2 With More Functions And Fixed All Errors!

# Usage
```js
const Discord = require("discord.js");
const client = new Discord.Client();
const Random = require("srod-v2");

client.on("ready", () => {
    console.log("Bot Is Ready With Srod-v2!");
});

client.on("message", async message => {
    if (message.content.toLowerCase() === "meme") {
        let MemeEmbed = Random.GetMeme();
        return message.channel.send(MemeEmbed);
    }
});

client.login("Put Your Epic Bot Token Here!");
```
![](https://cdn.discordapp.com/attachments/763294769974607912/763295959761289246/unknown.png)


## DOCUMENTATION

- All Functions Return Data As JSON Embeds (Discord Message Embeds)
- Color Information : Use CAPS For Name (Blue : BLUE) , Its Optional If You Don't Want To Set Any Color Then Embed Color Will Be Random!

**GetMeme(EmbedColor):** Return A Random Meme (Image, Title, Link, Timestamp, Color) | EmbedColor Is Optional!
```js
  let MemeEmbed = await Random.GetMeme("ORANGE");
  message.channel.send(MemeEmbed);
```

**GetJoke(EmbedColor):** Return A Random Joke (Description, Timestamp) | EmbedColor Is Optional!
```js
  let JokeEmbed = await Random.GetJoke("BLUE");
  message.channel.send(JokeEmbed);
```

**GetAdvice(EmbedColor):** Return A Random Advice (Description, Timestamp) | EmbedColor Is Optional!
```js
  let AdviceEmbed = await Random.GetAdvice("ORANGE");
  message.channel.send(AdviceEmbed);
```

**GetFact(EmbedColor):** Return A Random Fact (Description, Timestamp) | EmbedColor Is Optional!
```js
  let FactEmbed = await Random.GetFact("BLUE");
  message.channel.send(FactEmbed);
```

**GetWhy(EmbedColor):** Return A Random Line That Is Starting With Why (Description, Timestamp) | EmbedColor Is Optional!
```js
  let WhyEmbed = await Random.GetWhy("ORANGE");
  message.channel.send(WhyEmbed);
```

**Lmgtfy(Search, EmbedColor):** Return Lmgtfy Link Of Your Search (Description, Timestamp) | EmbedColor Is Optional!
```js
  let LmgtfyEmbed = await Random.Lmgtfy("Discord", "BLUE");
  message.channel.send(LmgtfyEmbed);
```

**Tweet(TweetOwnerName, TweetText, EmbedColor):** Return A Fake Generated Tweet Image (Image, Timestamp) | EmbedColor Is Optional!
```js
  let TweetEmbed = await Random.Tweet("Legendary Emoji", "Hello, I Am Legendary Emoji!", "BLUE");
  message.channel.send(TweetEmbed);
```

**MinecraftAchievement(AchievementText, EmbedColor):** Return A Fake Generated Minecraft Achievement Image (Image, Timestamp) | EmbedColor Is Optional!
```js
  let MinecraftAchievementEmbed = await Random.MinecraftAchievement("1st Npm Package!", "ORANGE");
  message.channel.send(MinecraftAchievementEmbed);
```

**PornhubComment(CommentOwnerName, CommentOwnerAccountImage, CommentText, EmbedColor):** Return A Fake Generated Pornhub Comment Image (Image, Timestamp) | EmbedColor Is Optional!
```js
  let PornhubCommentEmbed = await Random.PornhubComment("Legendary Emoji", "https://cdn.discordapp.com/avatars/576893842058641412/f5abf8b3b9c9524ff5d13388ba8fbd99.png?size=128", "Damn, Hot!", "BLUE");
  message.channel.send(PornhubCommentEmbed);
```

**GetAnimeStuff(Thing, EmbedColor):** Return Your Given Anime Thing! (Image, Timestamp) - Available : [Click Me](https://hatebin.com/vchdbsryrs) | EmbedColor Is Optional!
```js
  let GetAnimeStuffEmbed = await Random.GetAnimeStuff("Kiss", "ORANGE");
  message.channel.send(GetAnimeStuffEmbed);
```

**GetAnimalStuff(Thing, EmbedColor):** Return Your Given Animal Thing! (Image, Timestamp) - Available : [Click Me](https://hatebin.com/qpolfodilq) | EmbedColor Is Optional!
```js
  let GetAnimalStuffEmbed = await Random.GetAnimalStuff("Cat", "BLUE");
  message.channel.send(GetAnimalStuffEmbed);
```

# Support , Credit , Etc

Owners => CTK WARRIOR#7923 , Legendary Emoji#1742

Credit => CTK WARRIOR#7923 (README.md)

Youtube Channel (Ctk) => [Click Me](https://youtube.com/c/dbdandmore)

Application (Playstore, Ctk) => [Click Me](https://play.google.com/store/apps/details?id=com.yato2050.discord&hl=en_IN)

Donate (Ctk) => [Click Me](https://www.patreon.com/dbdandmore)

Support & CTK'S SERVER => [JOIN OR DIE TODAY](https://withwin.in/dbd)