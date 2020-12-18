const Fetch = require("node-fetch");

/**
 * Chat With You :D
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Chat(options = {}) {
    if (!options.Message) throw new Error(`No Message`);
    if (options.Message.length > 1900) throw new Error(`Message Limit: 1900`);
    if (!options.Token) throw new Error(`No Token\n\nHow To Get Token?\nJoin This Server & Check Announcement: https://discord.gg/uqB8kxh (After Joining Find Api Update In Announcement Channel)`);

    let res;

    try {

        res = await Fetch(`http://api.snowflakedev.cf:9019/api/chatbot?message=${encodeURIComponent(options.Message)}`, {
            headers: {
                "Authorization": String(options.Token)
            }
        });

    } catch (error) {
        try {
            res = await Fetch(`http://api.snowflakedev.cf/api/chatbot?message=${encodeURIComponent(options.Message)}`, {
                headers: {
                    "Authorization": String(options.Token)
                }
            });
        } catch (error) {
            throw new Error(`Something Went Wrong, Try Again Later!`);
        };
    };

    let json = await res.json();
    
    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: json.message,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.message
    };

    return Data;
};

module.exports = Chat;