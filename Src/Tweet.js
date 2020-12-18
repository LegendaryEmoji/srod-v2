const Fetch = require("node-fetch");

/**
 * Return A Fake Tweet
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Tweet(options = {}) {
    if (!options.Name || !options.Tweet) throw new Error(`No Name (You Will See Image If Account Is Real), Tweet`);

    Name = encodeURIComponent(options.Name), Tweet = encodeURIComponent(options.Tweet);

    let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${Name}&text=${Tweet}`);
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

module.exports = Tweet;