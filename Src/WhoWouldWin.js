const Fetch = require("node-fetch");

/**
 * Return A Who Would Win
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function WhoWouldWin(options = {}) {
    if (!options.Image || !options.image2) throw new Error(`No Image, Image2`);

    Image = encodeURIComponent(options.Image), Image2 = encodeURIComponent(options.Image2);

    let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=whowouldwin&user1=${Image}&user2=${Image2}`);
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

module.exports = WhoWouldWin;