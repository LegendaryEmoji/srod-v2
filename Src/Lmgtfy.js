/**
 * Let Me Google It For You
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Lmgtfy(options = {}) {
    if (!options.Search) throw new Error(`No Search`);
    if (options.Search.Length > 1900) throw new Error(`Search Limit: 1900`);

    const Base = `https://lmgtfy.com/?q=${encodeURIComponent(options.Search)}`;
    let Url;

    if (options.Engine) {
        Engine = options.Engine.toLowerCase();
        if (Engine === "default" || Engine === "def") {
            Url = Base;
        } else if (Engine === "google" || Engine === "ggl") {
            Url = `https://www.google.com/search?q=${encodeURIComponent(options.Search)}`;
        } else {
            throw new Error(`Non Supported Engine Provided.`);
        };
    } else {
        Url = Base;
    };

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: `Result : [Click Me](${Url})`,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: Url
    };

    return Data;
};

module.exports = Lmgtfy;