const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    identityCard:{
        type:Number
    }
});
module.exports= User = mongoose.model("user",UserSchema);