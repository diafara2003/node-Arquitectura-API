
const User = require('../models/model.Users');
const Error = require('../models/model.Error');

let ControllerUser = {};


ControllerUser.List = async () => {
    try {
        console.log('statting');
        const lstUsers = await User.find();
        console.log('end');

        return lstUsers;
    } catch (error) {
        console.log(error);

    }
}


ControllerUser.Save = (name, email, identityCard) => {
    try {

        const user = new User({
            name:name,
            email:email,
            identityCard:identityCard
        });

        user.save();

       return "creado";

    } catch (error) {
        console.log(error);
        return "error";
    }
}


module.exports = ControllerUser;