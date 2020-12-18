const Fetch = require("node-fetch");

/**
 * Translate Any Lagnauge To Englsih
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Translate(options = {}) {
    if (!options.String) throw new Error(`No String`);
    if (options.String.length > 1900) throw new Error(`String Limit: 1900`);

    let res = await Fetch(`https://bruhapi.xyz/translate/${encodeURIComponent(options.String)}`)
    let json = await res.json();

    if (!json.text || !json.lang) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: `${json.lang} | ${json.text}`,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Language: json.lang,
            Text: json.text
        }
    };

    return Data;
};

module.exports = Translate;