const crypto = require("crypto");

/**
 * Return A Random String
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function RandomString(options = {}) {
    if (!options.Length) throw new Error(`No Length`);
    if (isNaN(options.Length)) throw new Error(`Invalid Length`);
    if (options.length > 1900) throw new Error(`Length Limit: 1900`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: crypto.randomBytes(Math.round(Length / 2)).toString("hex"),
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: crypto.randomBytes(Math.round(Length / 2)).toString("hex")
    };

    return Data;
};

module.exports = RandomString;