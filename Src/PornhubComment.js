const Fetch = require("node-fetch");

/**
 * Return A Fake Pornhub Comment With Some Likes & Dark Theme
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function PornhubComment(options = {}) {
    if (!options.Name || !options.Image || !options.Comment) throw new Error(`Please Give All The Following Things:\nName, Image (Format: png), Comment`);

    Name = encodeURIComponent(options.Name), Image = encodeURIComponent(options.Image), Comment = encodeURIComponent(options.Comment);

    let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${Name}&image=${Image}&text=${Comment}`);
    let json = await res.json();

    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: json.message },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.message
    };

    return Data;
};

module.exports = PornhubComment;