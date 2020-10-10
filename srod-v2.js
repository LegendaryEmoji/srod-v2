const Fetch = require("node-fetch")
const Joker = require('one-liner-joke');
const crypto = require("crypto");

module.exports = {
    DiscordSpoiler: async function (String, EmbedColor) {
        if (!String) throw new Error(`Please Give Something As Data!`);
        if (String.length > 1500) throw new Error(`String Length Limit - 1500`)

        let Result = `||${String}||`;

        if (!Result) throw new Error(`Something Went Wrong, Try Again Later!`);

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: Result,
                timestamp: new Date()
            }
        };

        return Data;
    },
    Hastebin: async function (String, EmbedColor) {
        if (!String) throw new Error(`Please Give Something As Data!`);
        if (String.length > 1500) throw new Error("String Length Limit - 1500");

        let res = await Fetch("https://hasteb.in/documents", {
            method: "POST",
            body: String,
            headers: { "Content-Type": "text/plain" }
        });

        let json = await res.json();

        if (!json.key) throw new Error(`Something Went Wrong, Try Again Later!`);

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
        if (!Length) throw new Error(`Please Give String Length!`);
        if (Length > 1500) throw new Error(`String Length Limit - 1500`);

        let String = crypto.randomBytes(Math.round(Length / 2)).toString("hex");

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: String,
                timestamp: new Date()
            }
        };

        return Data;
    },
    GetMeme: async function (EmbedColor) {
        let res = await Fetch(`https://apis.duncte123.me/meme`);

        let { data } = await res.json();

        if (!data || !data.title || !data.url || !data.image) throw new Error("Something Went Wrong, Try Again Later!");

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

        if (!getRandomJoke.body) throw new Error("Something Went Wrong, Try Again Later!");

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

        if (!slip) throw new Error("Something Went Wrong, Try Again Later!")

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

        if (!json.fact) throw new Error("Something Went Wrong, Try Again Later!");

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

        if (!json.why) throw new Error("Something Went Wrong, Try Again Later!");

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
        if (!String) throw new Error("Please Give Something As Data!");
        if (String.length > 15) throw new Error("String Length Limit - 15");

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

    Tweet: async function (Name, Tweet, EmbedColor) {
        if (!Name) throw new Error("Please Give Tweet Owner Name!");
        if (Name.length > 30) throw new Error("Tweet Owner Name Length Limit - 30");
        if (!Tweet) throw new Error("Please Give Tweet!");
        if (Tweet.length > 100) throw new Error("Tweet Length Limit - 100");

        let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${Name}&text=${Tweet}`);

        let json = await res.json();

        if (!json.message) throw new Error("Something Went Wrong, Try Again Later!");

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

    PornhubComment: async function (Name, Image, Comment, EmbedColor) {
        if (!Name) throw new Error("Please Give Comment Owner Name!");
        if (Name.length > 30) throw new Error("Comment Owner Name Length Limit - 30");
        if (!Image) throw new Error("Please Give Comment Owner Avatar Image Link!");
        if (Image.length > 150) throw new Error("Comment Owner Avatar Image Length Limit - 150");
        if (!Image.startsWith("http")) throw new Error("Please Give Valid Comment Owner Avatar Image Link!");
        if (!Comment) throw new Error("Please Give Comment!");
        if (Comment.length > 100) throw new Error("Comment Length Limit - 100");

        let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${Name}&image=${Image}&text=${Comment}`);

        let json = await res.json();

        if (!json.message) throw new Error("Something Went Wrong, Try Again Later!");

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

    Lmgtfy: async function (String, EmbedColor) {
        if (!String) throw new Error("Please Give Something As Data!");
        if (String.length > 500) throw new Error("String Length Limit - 500");

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

    GetAnimeImage: async function (Thing, EmbedColor) {
        let Things = ["neko", "nekogif", "holo", "cuddle", "foxgirl", "waifu", "smug", "baka", "slap", "poke", "feed", "pat", "hug", "kemonomimi", "kiss", "tickle"];
        if (!Thing) throw new Error(`Please Give Thing That You Want - Neko, NekoGif, Foxgirl, Holo, Cuddle, Waifu, Smug, Baka, Slap, Poke, Feed, Pat, Hug, Kemonomimi, Kiss, Tickle`);
        if (!Things.some(Ts => Thing.toLowerCase().includes(Ts))) throw new Error("Please Give Valid Thing That You Want - Neko, NekoGif, Foxgirl, Holo, Cuddle, Waifu, Smug, Baka, Slap, Poke, Feed, Pat, Hug, Kemonomimi, Kiss, Tickle");

        let res;
        if (Thing.toLowerCase() === "foxgirl") {
            res = await Fetch(`https://nekos.life/api/v2/img/fox_girl`);
        } else if (Thing.toLowerCase() === "nekogif") {
            res = await Fetch(`https://nekos.life/api/v2/img/ngif`)
        } else {
            res = await Fetch(`https://nekos.life/api/v2/img/${Thing.toLowerCase()}`);
        }

        let json = await res.json();

        if (!json.url) throw new Error(`Something Went Wrong, Try Again Later!`);

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                image: { url: json.url },
                timestamp: new Date()
            }
        };

        return Data;
    },

    GetAnimalImage: async function (Thing, EmbedColor) {
        let Things = ["dog", "cat", "duck", "bird", "panda", "wolf", "fox", "seal", "llama", "alpaca", "camel", "lizard", "snake"];
        if (!Thing) throw new Error(`Please Give Thing That You Want - Dog, Cat, Duck, Bird, Panda, Wolf, Fox, Seal, Llama, Alpaca, Camel, Lizard, Snake`);
        if (!Things.some(Ts => Thing.toLowerCase().includes(Ts))) throw new Error("Please Give Valid Thing That You Want - Dog, Cat, Duck, Bird, Panda, Wolf, Fox, Seal, Llama, Alpaca, Camel, Lizard, Snake");

        if (Thing.toLowerCase() === "snake") {

            let res = await Fetch(
                `https://www.reddit.com/r/snakes.json`
            );

            const { data } = await res.json();

            if (!data) throw new Error("Something Went Wrong, Try Again Later!");

            const Nsfw = data.children.filter((post) => !post.data.over_18);

            if (!Nsfw.length) throw new Error(`No Snakes images Found, Try Again Later!`);

            const Post = Nsfw[Math.floor(Math.random() * Nsfw.length)];

            if (!Post.data.url) throw new Error("Something Went Wrong, Try Again Later!");

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

        let res = await Fetch(`https://apis.duncte123.me/animal/${Thing.toLowerCase()}`);

        let { data } = await res.json();

        if (!data || !data.file) throw new Error("Something Went Wrong, Try Again Later!");

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
