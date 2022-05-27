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


/**
 * Return A Pussy Image
 * @returns {Data}
 */

async function Pussy(options = {}) {
   var subreddits = [
          'pussy',
          'vagina',
          'PerfectPussies',
          'rearpussy',
          'GirlsInSocks',
          'girlsinanklesocks'
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
 * Return A Teen NSFW Image
 * @returns {Data}
 */

async function Teen(options = {}) {
  var subreddits = [
          'nnlegalteens',
          'Barelylegal',
          'barelylegalteens',
          'LegalTeens'
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
 * Return A Feet nsfw Image
 * @returns {Data}
 */

async function Feet(options = {}) {
 var subreddits = [
          'CelebrityFeet',
          'FFSocks',
          'Feet_NSFW',
          'FootFetish',
          'FFNBPS',
          'feetish',
          'scent_of_women_feet',
          'AsianFeet',
          'gayfootfetish',
          'HighHeels',
          'Soles',
          'CosplayFeet',
          'dirtyfeet',
          'DesiFeet',
          'ebonyfeet',
          'rule34feet',
          'girlsinanklesocks',
          'Porn_Star_Feet',
          'FeetVideos',
          'Soles_And_Holes',
          'Footjobs'
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
 * Return A Hentai Image
 * @returns {Data}
 */

async function Hentai(options = {}) {
   var subreddits = [
          'hentai',
          'rule34',
          'rule34feet'
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
 * Return A Random Nsfw Image
 * @returns {Data}
 */

async function Nsfw(options = {}) {
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
          'CuteLittleButts',
          'bikinis',
          'bikinibodies',
          'boobs',
          'Boobies',
          'Stacked',
          'BustyPetite',
          'Cleavage',
          'bustyasians',
          'boltedontits',
          'burstingout',
          'CelebrityFeet',
          'FFSocks',
          'Feet_NSFW',
          'FootFetish',
          'FFNBPS',
          'feetish',
          'scent_of_women_feet',
          'AsianFeet',
          'gayfootfetish',
          'HighHeels',
          'Soles',
          'CosplayFeet',
          'dirtyfeet',
          'DesiFeet',
          'ebonyfeet',
          'rule34feet',
          'girlsinanklesocks',
          'Porn_Star_Feet',
          'FeetVideos',
          'Soles_And_Holes',
          'Footjobs',
          'pussy',
          'vagina',
          'PerfectPussies',
          'rearpussy',
          'nnlegalteens',
          'Barelylegal',
          'barelylegalteens',
          'LegalTeens',
          'thighs',
          'PerfectThighs',
          'thickthighs',
          'girlsinyogapants',
          'YogaPants',

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
 * Return A Cum Image
 * @returns {Data}
 */

async function Cum(options = {}) {
    var subreddits = [
          'buttloads',
          'CumOnAss',
          'bodyshots',
          'cumsluts'
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
 * Return A Bikini nsfw Image
 * @returns {Data}
 */

async function Bikini(options = {}) {
 var subreddits = [
          'bikinis',
          'bikinibodies'
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
 * Return A Nsfw Socks Image
 * @returns {Data}
 */

async function Socks(options = {}) {
  var subreddits = [
          'GirlsInSocks',
          'girlsinanklesocks'
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
 * Return A Nsfw Tattoo Image
 * @returns {Data}
 */


async function Tattoo(options = {}) {
   var subreddits = [
          'HotChicksWithTattoos',
          'SuicideGirls',
          'SceneGirls',
          'PrettyAltGirls'
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
 * Return A Thighs Image
 * @returns {Data}
 */

async function Thighs(options = {}) {
     var subreddits = [
          'thighs',
          'PerfectThighs',
          'thickthighs'
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
 * Return A Nsfw Yogapants Image
 * @returns {Data}
 */

async function Yogapants(options = {}) {
    var subreddits = [
          'girlsinyogapants',
          'YogaPants',
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
    Ass, Boobs, Pussy, Teen, Feet, Hentai, Nsfw, Cum, Bikini, Socks, Tattoo, Thighs, Yogapants
};
