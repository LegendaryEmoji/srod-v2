const Fetch = require("node-fetch");

/**
 * Return Discord.js Docs Of Your String
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function DiscordJSDocs(options = {}) {
    if (!options.String) throw new Error(`No String`);
    if (options.String.length > 100) throw new Error(`String Limit: 100`);

    let res = await Fetch(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(options.String)}`);
    let json = await res.json();

    if (!json) throw new Error(`No Result Found!`);
    json.color = options.Color || "RANDOM";

    let Data = { embed: json };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json
    };

    return Data;
};

module.exports = DiscordJSDocs;