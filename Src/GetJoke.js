const Fetch = require("node-fetch");

/**
 * Return A Random Joke
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetJoke(options = {}) {

    let res = await Fetch(`http://official-joke-api.appspot.com/random_joke`);
    let json = await res.json();

    if (!json.setup || !json.punchline) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            title: json.setup,
            description: json.punchline,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Setup: json.setup,
            PunchLine: json.punchline
        }
    };

    return Data;
};

module.exports = GetJoke;