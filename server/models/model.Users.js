const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        tyle: String
    },
    identityCard:{
        tyme:Number
    }
});
module.exports= User = mongoose.model("user",UserSchema);