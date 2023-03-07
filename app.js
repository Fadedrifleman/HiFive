import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import main from "./routes/main.js"


const app = express();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use("/", main)

let port = 3000;
app.listen(port, () => {
    console.log(`Server has started successfully at port : ${port}`);
});