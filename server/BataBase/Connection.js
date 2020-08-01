require('dotenv/config');

const mongose = require('mongoose');
const connectDB = async () => {
    await mongose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("db connected");
};

module.exports= connectDB;