/**
 * Make Your Given String Into Discord Spoiler
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function DiscordSpoiler(options = {}) {
    if (!options.String) throw new Error(`No String`);
    if (options.String.length > 1900) throw new Error(`String Limit: 1900`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: `||${options.String}||`,
            timestamp: new Date(),
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: `||${options.String}||`
    };

    return Data;
};

module.exports = DiscordSpoiler;