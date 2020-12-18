/**
 * Return A Fake Change My Mind
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function ChangeMyMind(options = {}) {
    if (!options.Message) throw new Error(`No Message`);
    if (options.Message.length > 100) throw new Error(`Message Limit: 100`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: `https://vacefron.nl/api/changemymind?text=${encodeURIComponent(options.Message)}` },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: `https://vacefron.nl/api/changemymind?text=${encodeURIComponent(options.Message)}`
    };

    return Data;
};

module.exports = ChangeMyMind;