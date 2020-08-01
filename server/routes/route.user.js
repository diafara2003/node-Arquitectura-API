const express = require('express');
const router = express.Router();
const UserController = require('../Controller/controller.user');


//obtener todos los usuarios
router.get('/', async (req, res) => {

    try {
        const LstUser = await UserController.List();
        console.log("empezo");
        res.json(LstUser);

    } catch (error) {
        console.log(error);
    }

});

//obtener un usuario por cedula
router.get('/:userid', async (req, res) => {

    const LstUser = await Users.find()
    res.json(LstUser);
    res.send("from user id" + req.params.userid);
});


router.post('/', (req, res) => {

    const { name, email, identityCard } = req.body;
    console.log("name is " + identityCard);
    const result =  UserController.Save(name, email, identityCard);

    res.json({ message: result});
});

module.exports = router;