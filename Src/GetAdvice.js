const Fetch = require("node-fetch");

/**
 * Return A Random Advice
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetAdvice(options = {}) {

    let res = await Fetch("https://api.adviceslip.com/advice");

    let {
        slip
    } = await res.json();

    if (!slip.advice) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: slip.advice,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: slip.advice
    };

    return Data;
};

module.exports = GetAdvice;