const path = require("path");
module.exports = function (app) {
    // When user lands on home page, return index.html.
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
    // When user goes to site/exercise, return the exercise html.
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })
    // When user lands on stats page, return stats.html.
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    })
}