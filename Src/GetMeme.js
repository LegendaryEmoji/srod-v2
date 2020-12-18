const Fetch = require("node-fetch");

/**
 * Return A Random Meme
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetMeme(options = {}) {

     const Reds = [
          "memes",
          "me_irl",
          "dankmemes",
          "comedyheaven",
          "Animemes"
      ];

      const Rads = Reds[Math.floor(Math.random() * Reds.length)];

      const res = await Fetch(`https://www.reddit.com/r/${Rads}/random/.json`);
      const json = await res.json();

      if (!json[0]) throw new Error("Something Went Wrong, Try Again Later!");

      const data = json[0].data.children[0].data;

      let Data = {
         embed: {
             color: options.Color || "RANDOM",
             url: `https://reddit.com${data.permalink}`,
             title: data.title,
             image: { url: data.url },
             footer: { text: `${data.ups || 0} 👍 | ${data.num_comments || 0} 💬` },
             timestamp: new Date()
         }
      };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Url: `https://reddit.com${data.permalink}`,
            Title: data.title,
            Image: data.url,
            Upvote: data.ups,
            Comment: data.num_comments
        }
    };

    return Data;
};

module.exports = GetMeme;