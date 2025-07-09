const { strict } = require("assert");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

async function main() {
    await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.yhzls02.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Conectou ao banco de dados!");

}
main().catch((err) => console.log(err));

module.exports = main;
