const Fetch = require("node-fetch");

/**
 * Return A Fake Blush Fact
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function BlushFact(options = {}) {
    if (!options.Message) throw new Error(`No Message`);
    if (options.Message.length > 1500) throw new Error(`Message Limit: 1500`);

    let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=fact&text=${encodeURIComponent(options.Message)}`);
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

module.exports = BlushFact;