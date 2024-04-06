const mongoose = require("mongoose");

try {
    const url = process.env.MONGO_URL;

    // if (mongoose.connections[0].readyState == 0) return
    mongoose.connect(url)
        .then(console.log(`Connected to DB on : ${url}`))
        .catch(err => console.log("Error in mongoose config", err));

} catch (err) {
    console.log("Error in mongoose config", err);
}