const Fetch = require("node-fetch");

/**
 * Return A Random Fact
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetFact(options = {}) {

    let res = await Fetch("https://nekos.life/api/v2/fact");
    let json = await res.json();

    if (!json.fact) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: json.fact,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.fact
    };

    return Data;
};

module.exports = GetFact;