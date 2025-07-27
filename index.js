import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/public/home.html");
    res.send("Welcome!");
});

app.post("/register", (req, res) => {
    // console.log(req.body);
    res.send("We are still working on the site!");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`); 
});