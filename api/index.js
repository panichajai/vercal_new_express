const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get('/heatcheck', function(req, res, next) {
    const currentTime = new Date();
    res.send(`This is my about route. Current time: ${currentTime}`);
});
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;