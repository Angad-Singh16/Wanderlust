const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true,
    }
});

userSchema.plugin(require("passport-local-mongoose"));

module.exports = mongoose.model("User", userSchema);

