 const configRoutes = (app) => {

    //default url server
app.get('/', (req, res) => {
    res.send("we are on  home");
});


//route to user
app.use('/user', require('./route.user'));
app.use('/loan', require('./route.loan'));

}

exports.config = configRoutes;