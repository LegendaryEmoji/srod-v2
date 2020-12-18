const Fetch = require("node-fetch");

/**
 * Make A New Hastebin Page With Your Given String
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function HasteBin(options = {}) {
    if (!options.String) throw new Error(`No String`);
    if (options.String.length > 1900) throw new Error(`String Limit: 1900`);

    let res = await Fetch("https://hasteb.in/documents", {
        method: "POST",
        body: String(options.String),
        headers: {
            "Content-Type": "text/plain"
        }
    });

    let json = await res.json();

    if (!json.key) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: `Hastebin Link : [Click Me](https://hasteb.in/${json.key}.js)`,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Key: json.key,
            Link: `https://hasteb.in/${json.key}.js`
        }
    };

    return Data;
};

module.exports = HasteBin;