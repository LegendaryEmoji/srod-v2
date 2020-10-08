const Fetch = require("node-fetch")
const Joker = require('one-liner-joke');
const { Error } = require("./Src/functions.js");
const crypto = require("crypto");

module.exports = {
    Hastebin: async function (String, EmbedColor) {
        if (!String) return Error(`Please Give Something As Data!`);
        if (String.length > 1500) return Error("String Length Limit - 1500");

        let res = await Fetch("https://hasteb.in/documents", {
            method: "POST",
            body: String,
            headers: { "Content-Type": "text/plain" }
        });

        let json = await res.json();

        if (!json.key) return Error(`Something Went Wrong, Try Again Later!`);

        let Link = `https://hasteb.in/${json.key}.js`;

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: `Hastebin Link : [Click Me](${Link})`,
                timestamp: new Date()
            }
        };

        return Data;
    },
    RandomString: function (Length, EmbedColor) {
        if (!Length || length < 1) throw new Error(`Please Give String Length!`);
        if (Length > 1500) throw new Error(`Random String Length Limit - 1500`);
        const char = crypto.randomBytes(Math.round(Length / 2)).toString("hex");

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: char,
                timestamp: new Date()
            }
        };

        return Data;
    },
    DiscordSpoiler: async function (String, EmbedColor) {
        if (!String) return Error(`Please Give Something As Data!`);
        if (String.length > 1500) return Error(`String Length Limit - 1500`)

        let Result = `||${String}||`;

        if (!Result) return Error(`Something Went Wrong, Try Again Later!`);

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: Result,
                timestamp: new Date()
            }
        };

        return Data;
    },
    GetMeme: async function (EmbedColor) {
        let res = await Fetch(`https://apis.duncte123.me/meme`);

        let { data } = await res.json();

        if (!data) return Error("Something Went Wrong, Try Again Later!");

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                title: data.title,
                url: data.url,
                image: {
                    url: data.image
                },
                timestamp: new Date()
            }
        };

        return Data;
    },
    GetJoke: async function (EmbedColor) {

        let getRandomJoke = Joker.getRandomJoke();

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: getRandomJoke.body,
                timestamp: new Date()
            }
        }

        return Data;
    },
    GetAdvice: async function (EmbedColor) {

        const res = await Fetch("https://api.adviceslip.com/advice");

        let { slip } = await res.json();

        if (!slip) return Error("Something Went Wrong, Try Again Later!")

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: slip.advice,
                timestamp: new Date()
            }
        }

        return Data;
    },
    GetFact: async function (EmbedColor) {

        const res = await Fetch("https://nekos.life/api/v2/fact");

        let json = await res.json();

        if (!json.fact) return Error("Something Went Wrong, Try Again Later!");

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: json.fact,
                timestamp: new Date()
            }
        }

        return Data;
    },
    GetWhy: async function (EmbedColor) {

        const res = await Fetch("https://nekos.life/api/v2/why");

        let json = await res.json();

        if (!json.why) return Error("Something Went Wrong, Try Again Later!");

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: json.why,
                timestamp: new Date()
            }
        }

        return Data;
    },
    MinecraftAchievement: async function (String, EmbedColor) {
        if (!String) return Error("Please Give Something As Data!");
        if (String.length > 15) return Error("String Length Limit - 15");

        let Link = `https://api.alexflipnote.dev/achievement?text=${String}`;

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                image: {
                    url: Link
                },
                timestamp: new Date()
            }
        };

        return Data;
    },
    Tweet: async function(Name, Tweet, EmbedColor) {
        if (!Name) return Error("Please Give Tweet Owner Name!");
        if (Name.length > 30) return Error("Tweet Owner Name Length Limit - 30");
        if (!Tweet) return Error("Please Give Tweet!");
        if (Tweet.length > 100) return Error("Tweet Length Limit - 100");

        let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${Name}&text=${Tweet}`);

        let json = await res.json();

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                image: {
                    url: json.message
                },
                timestamp: new Date()
            }
        };

        return Data;
    },
    PornhubComment: async function(Name, Image, Comment, EmbedColor) {
        if (!Name) return Error("Please Give Comment Owner Name!");
        if (Name.length > 30) return Error("Comment Owner Name Length Limit - 30");
        if (!Image) return Error("Please Give Comment Owner Avatar Image Link!");
        if (Image.length > 150) return Error("Comment Owner Avatar Image Length Limit - 150");
        if (!Image.startsWith("http")) return Error("Please Give Valid Comment Owner Avatar Image Link!");
        if (!Comment) return Error("Please Give Comment!");
        if (Comment.length > 100) return Error("Comment Length Limit - 100");

        let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${Name}&image=${Image}&text=${Comment}`);

        let json = await res.json();

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                image: {
                    url: json.message
                },
                timestamp: new Date()
            }
        };

        return Data;
    },
    Lmgtfy: async function(String, EmbedColor) {
        if (!String) return Error("Please Give Something As Data!");
        if (String.length > 500) return Error("String Length Limit - 500");

        let Stringy = String.split(" ").slice(1).join("+").toLowerCase();

        let Link = `https://lmgtfy.com/?q=${Stringy}`;

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: `Result : [Click Me](${Link})`,
                timestamp: new Date()
            }
        };

        return Data;
    },
    GetAnimeStuff: async function (Thing, EmbedColor) {
        let Things = ["neko", "nekogif", "foxgirl", "waifu", "smug", "baka", "slap", "poke", "pat", "hug", "kiss", "tickle"];
        if (!Thing) return Error(`Please Give Thing That You Want - Neko, NekoGif, Foxgirl, Waifu, Smug, Baka, Slap, Poke, Pat, Hug, Kiss, Tickle`);
        if (!Things.some(Ts => Thing.toLowerCase().includes(Ts))) return Error("Please Give Valid Thing That You Want - Neko, NekoGif, Foxgirl, Waifu, Smug, Baka, Slap, Poke, Pat, Hug, Kiss, Tickle");

        let res;
        if (Thing.toLowerCase() === "foxgirl") {
            res = await Fetch(`https://nekos.life/api/v2/img/fox_girl`);
        } else if (Thing.toLowerCase() === "nekogif") {
            res = await Fetch(`https://nekos.life/api/v2/img/ngif`)
        } else {
            res = await Fetch(`https://nekos.life/api/v2/img/${Thing}`);
        }

        let json = await res.json();

        if (!json.url) return Error(`Something Went Wrong, Try Again Later!`);

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                image: { url: json.url },
                timestamp: new Date()
            }
        };

        return Data;
    },
    GetAnimalStuff: async function (Thing, EmbedColor) {
        let Things = ["dog", "cat", "duck", "bird", "panda", "wolf", "fox", "seal", "llama", "alpaca", "camel", "lizard", "snake"];
        if (!Thing) return Error(`Please Give Thing That You Want - Dog, Cat, Duck, Bird, Panda, Wolf, Fox, Seal, Llama, Alpaca, Camel, Lizard, Snake`);
        if (!Things.some(Ts => Thing.toLowerCase().includes(Ts))) return Error("Please Give Valid Thing That You Want - Dog, Cat, Duck, Bird, Panda, Wolf, Fox, Seal, Llama, Alpaca, Camel, Lizard, Snake");

        if (Thing.toLowerCase() === "snake") {

            let res = await Fetch(
                `https://www.reddit.com/r/snakes.json`
            );

            const { data } = await res.json();

            if (!data) return Error("Something Went Wrong, Try Again Later!");

            const Nsfw = data.children.filter((post) => !post.data.over_18);

            if (!Nsfw.length) return Error(`No Snakes images Found, Try Again Later!`);

            const Post = Nsfw[Math.floor(Math.random() * Nsfw.length)];

            let Data = {
                embed: {
                    color: EmbedColor || "RANDOM",
                    image: {
                        url: Post.data.url
                    },
                    timestamp: new Date()
                }
            };

            return Data;
        };

        let res = await Fetch(`https://apis.duncte123.me/animal/${Thing}`);

        let { data } = await res.json();

        if (!data) return Error("Something Went Wrong, Try Again Later!");

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                image: {
                    url: data.file
                },
                timestamp: new Date()
            }
        };

        return Data;
    }
}
