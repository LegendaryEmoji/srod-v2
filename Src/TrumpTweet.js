const Fetch = require("node-fetch");

/**
 * Return A Fake Trump Tweet
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function TrumpTweet(options = {}) {
    if (!options.Tweet) throw new Error(`No Tweet`);

    Tweet = encodeURIComponent(options.Tweet);

    let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${Tweet}`);
    let json = await res.json();

    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: json.message },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.message
    };

    return Data;
};

module.exports = TrumpTweet;