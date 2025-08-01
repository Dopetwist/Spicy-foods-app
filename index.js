import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Home/home.html");
});

app.get("/menu", (req, res) => {
    res.sendFile(__dirname + "/Menu/menu.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/About/about.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/Contact/contact.html");
});

app.get("/landing", (req, res) => {
    res.sendFile(__dirname + "/landing.html");
});

app.post("/register", (req, res) => {
    res.send("We are still working on the site!");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`); 
});