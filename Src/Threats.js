const Fetch = require("node-fetch");

/**
 * Return Threats (Image)
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Threats(options = {}) {
    if (!options.Image) throw new Error(`No Image`);

    let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=threats&url=${encodeURIComponent(options.Image)}`);
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

module.exports = Threats;