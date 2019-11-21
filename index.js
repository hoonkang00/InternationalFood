const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const Axios = require("axios");
const detectLanguage = require("./lib/detectLanguage.js");
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "dist")));

app.post("/detectLanguage", (req, res) => {
  detectLanguage(req.body.q)
    .then(({ data }) => {
      res.send(data.data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
