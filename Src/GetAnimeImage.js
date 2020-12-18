const Fetch = require("node-fetch");

/**
 * Return A Random Anime Related Image (If No Option Provided)
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetAnimeImage(options = {}) {
    let Animes = ["neko", "nekogif", "holo", "cuddle", "foxgirl", "waifu", "smug", "baka", "slap", "poke", "feed", "pat", "hug", "kemonomimi", "kiss", "tickle"];
    let res, json, Data;

    if (!options.Anime) {
        Animes = Animes[Math.floor(Math.random() * Animes.length)];
        res = await Fetch(`https://apis.duncte123.me/animal/${Animals.toLowerCase()}`);
        json = await res.json();
        
        if (!json.url) throw new Error(`Something Went Wrong, Try Again Later!`);

        Data = {
            embed: {
                color: options.Color || "RANDOM",
                image: { url: json.url },
                timestamp: new Date()
            }
        };

        if (options.ResultOnly && options.ResultOnly === true) return {
            Result: json.url
        };

        return Data;
    } else {
        Anime = options.Anime.toLowerCase();
        if (!Animes.find(Ani => Ani === Anime)) throw new Error(`Invalid Anime Provided - ${Animes.map(Ani => Ani.charAt(0).toUpperCase() + Ani.slice(1)).join(", ")}`);
        if (Anime === "foxgirl") {
            res = await Fetch(`https://nekos.life/api/v2/img/fox_girl`);
        } else if (Anime === "nekogif") {
            res = await Fetch(`https://nekos.life/api/v2/img/ngif`);
        } else {
            res = await Fetch(`https://nekos.life/api/v2/img/${Anime}`);
        };
        json = await res.json();

        if (!json.url) throw new Error(`Something Went Wrong, Try Again Later!`);

        Data = {
            embed: {
                color: options.Color || "RANDOM",
                image: { url: json.url },
                timestamp: new Date()
            }
        };

        if (options.ResultOnly && options.ResultOnly === true) return {
            Result: json.url
        };
        
        return Data;
    };
};

module.exports = GetAnimeImage;