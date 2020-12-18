const Fetch = require("node-fetch");

/**
 * Return A Random Animal Image (If Not Selected)
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetAnimalImage(options = {}) {
    let Animals = ["dog", "cat", "duck", "bird", "panda", "wolf", "fox", "seal", "llama", "alpaca", "camel", "lizard"];
    let res, json, Data;

    if (!options.Animal) {
        Animals = Animals[Math.floor(Math.random() * Animals.length)];
        res = await Fetch(`https://apis.duncte123.me/animal/${Animals.toLowerCase()}`);
        json = await res.json();
        
        if (!json.data.file) throw new Error(`Something Went Wrong, Try Again Later!`);

        Data = {
            embed: {
                color: options.Color || "RANDOM",
                image: { url: json.data.file },
                timestamp: new Date()
            }
        };

        if (options.ResultOnly && options.ResultOnly === true) return {
            Result: json.data.file
        };

        return Data;
    } else {
        if (!Animals.find(Ani => Ani === options.Animal.toLowerCase())) throw new Error(`Invalid Animal Provided - ${Animals.map(Ani => Ani.charAt(0).toUpperCase() + Ani.slice(1)).join(", ")}`);
        res = await Fetch(`https://apis.duncte123.me/animal/${options.Animal.toLowerCase()}`);
        json = await res.json();

        if (!json.data.file) throw new Error(`Something Went Wrong, Try Again Later!`);

        Data = {
            embed: {
                color: options.Color || "RANDOM",
                image: { url: json.data.file },
                timestamp: new Date()
            }
        };

        if (options.ResultOnly && options.ResultOnly === true) return {
            Result: json.data.file
        };
        
        return Data;
    };
};

module.exports = GetAnimalImage;