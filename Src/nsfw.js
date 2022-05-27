const fetch = require("node-fetch");

async function Ass(options = {}) {
  var subreddits = [
          'asstastic',
          'pawg',
          'facedownassup',
          'ass',
          'brunetteass',
          'CheekyBottoms',
          'datgap',
          'underbun',
          'pawgtastic',
          'BestBooties',
          'CuteLittleButts'
        ]

var reddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
      
        const data = await fetch(`https://meme-api.herokuapp.com/gimme/${reddit}`).then(res => res.json())

        if (!data) return message.channel.send(`Sorry, seems like i can't connect to API.`);
      
        const { title, postLink, url, subreddit } = data

const Data = {
        embed: {
            color: options.Color || "RANDOM",
            url: postLink,
            title: title,
            image: { url: url },
            footer: { text: `r/${subreddit} Powered By: Supreme Club` }
        }
    }

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Url: postLink,
            Title: title,
            Image: url,
            Subreddit: `${subreddit} Powered By: Supreme Club`
        }


}
return Data;
};


module.exports = {
    Ass
};
