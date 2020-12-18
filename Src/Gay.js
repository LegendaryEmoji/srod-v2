/**
 * Return A Gay Image
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Gay(options = {}) {
    if (!options.Image) throw new Error(`No Image (Format: png)`);

    Image = encodeURIComponent(options.Image);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: `https://some-random-api.ml/canvas/gay?avatar=${Image}` },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: `https://some-random-api.ml/canvas/gay?avatar=${Image}`
    };

    return Data;
};

module.exports = Gay;