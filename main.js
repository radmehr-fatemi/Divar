const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const serveFavIcon = require("serve-favicon");
const swaggerConfig = require("./src/config/swagger.config");


const app = express();

//Set DotEnv path
dotenv.config();
const NodeEnv = process.env.NODE_ENV;
dotenv.config({
    path: path.join(__dirname ,`.env.${NodeEnv}`)
});

//Set Icon
app.use(serveFavIcon(path.join(__dirname ,"icon.ico")));

//Mongoose connection
require("./src/config/mongoose.config");

//Set Swagger
swaggerConfig(app)

//Port and Listen
const port = process.env.PORT;
app.listen(port ,() => {
    console.log(`Server has ran on http://localhost:${port}`);
})