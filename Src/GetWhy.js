const Fetch = require("node-fetch");

/**
 * Return A Random Why
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetWhy(options = {}) {

    let res = await Fetch("https://nekos.life/api/v2/why");
    let json = await res.json();

    if (!json.why) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: json.why,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.why
    };

    return Data;
};

module.exports = GetWhy;