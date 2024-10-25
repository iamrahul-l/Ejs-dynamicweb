import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.set('view engine', 'ejs');

app.post("/submit", (req, res) => {
  const allnamesnum = req.body["fName"].length + req.body["lName"].length;
  res.render('index', { numofletters:allnamesnum});
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
