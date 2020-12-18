const Fetch = require("node-fetch");

/**
 * Return Minecraft User ID
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function MCUserID(options = {}) {
    if (!options.UserName) throw new Error(`No UserName`);
    if (options.UserName.length > 16) throw new Error(`UserName Limit: 16`);

    let res, json;

    try {

    res = await Fetch(`https://mc-heads.net/minecraft/profile/${encodeURIComponent(options.UserName)}`)
    json = await res.json();

    } catch (error) {
        throw new Error(`Something Went Wrong, Try Again Later!`);
    };

    if (!json.name || !json.id) throw new Error(`No User Found!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: `${json.name} ID : ${json.id}`,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Name: json.name,
            ID: json.id
        }
    };

    return Data;
};

module.exports = MCUserID;