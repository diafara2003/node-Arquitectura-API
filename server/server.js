require('./config/config');

const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

const db = require('./BataBase/Connection');

db();


//config routues project
const routes= require('./routes/route.config');
routes.config(app);
//routes(app);


//route to user




//listen server on port process.env.PORT
app.listen(process.env.PORT, () => {

  console.log("server started");
});