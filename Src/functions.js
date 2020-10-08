module.exports = {
    Error: function(Message) {
        let Return = console.log(new Error(`[Srod-v2] ${Message}`));
        return Return;
    }
}