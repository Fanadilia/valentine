const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set up EJS for templating
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/gallery", (req, res) => res.render("gallery"));
app.get("/love-letter", (req, res) => res.render("love-letter"));
app.get("/poem-generator", (req, res) => res.render("poem-generator"));
app.get("/story", (req, res) => res.render("story"));

// Start the server
app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});