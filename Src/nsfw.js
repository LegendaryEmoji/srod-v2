const fetch = require("node-fetch");

/**
 * Return A Ass Image
 * @returns {Data}
 */

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
            footer: { text: `r/${subreddit}` }
        }
    }

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Url: postLink,
            Title: title,
            Image: url,
            Subreddit: `${subreddit}`
        }


}
return Data;
};


/**
 * Return A Boobs Image
 * @returns {Data}
 */

async function Boobs(options = {}) {
  var subreddits = [
          'boobs',
          'Boobies',
          'Stacked',
          'BustyPetite',
          'Cleavage',
          'bustyasians',
          'boltedontits',
          'burstingout'
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
            footer: { text: `r/${subreddit}` }
        }
    }

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Url: postLink,
            Title: title,
            Image: url,
            Subreddit: `${subreddit}`
        }


}
return Data;
};


module.exports = {
    Ass, Boobs
};
