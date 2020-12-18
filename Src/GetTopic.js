const Fetch = require("node-fetch");

/**
 * Return A Random Topic
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetTopic(options = {}) {

    let res = await Fetch("https://bruhapi.xyz/topic");
    let json = await res.json();

    if (!json.res) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: json.res,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.res
    };

    return Data;
};

module.exports = GetTopic;