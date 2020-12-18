const Fetch = require("node-fetch");

/**
 * Return A Fake Kanna With Board
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function KannaGen(options = {}) {
    if (!options.Text) throw new Error(`No Text`);

    Text = encodeURIComponent(options.Text);

    let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${Text}`);
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

module.exports = KannaGen;