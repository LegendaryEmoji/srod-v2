/**
 * Return A Fake Youtube Comment With 2k Likes & White Theme
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function YoutubeComment(options = {}) {
    if (!options.Name || !options.Image || !options.Comment) throw new Error(`Please Give All The Following Things:\nName, Image (Format: png), Comment`);

    Name = encodeURIComponent(options.Name), Image = encodeURIComponent(options.Image), Comment = encodeURIComponent(options.Comment);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: `https://some-random-api.ml/canvas/youtube-comment?avatar=${Image}&username=${Name}&comment=${Comment}` },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: `https://some-random-api.ml/canvas/youtube-comment?avatar=${Image}&username=${Name}&comment=${Comment}`
    };

    return Data;
};

module.exports = YoutubeComment;