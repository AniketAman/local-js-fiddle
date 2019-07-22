const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");
app.use("/", express.static("ui"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

let result = {};
app.get("/api/result", (req, res) => {
  res.set("Content-Type", "text/html");

  res.send(result);
});

app.get("/getStatus/:fileName", (req, res) => {
  let json = {};
  try {
    json = fs.readFileSync(`./ui/result/${req.params.fileName}.json`);
    json = JSON.parse(json);
    res.send({ ...json, isNew: false });
  } catch (e) {
    console.log(e);
    res.send({ isNew: true });
  }
});

app.post("/submit", (req, res) => {
  result = generateTemplate(req.body);
  fs.writeFileSync(`./ui/result/${req.body.fileName}.html`, result);
  fs.writeFileSync(
    `./ui/result/${req.body.fileName}.json`,
    JSON.stringify({
      html: req.body.html,
      js: req.body.js,
      css: req.body.css
    })
  );
  res.send({ status: "successful" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function generateTemplate({ html, css, js }) {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          <style>
          ${css}
          </style>
      </head>
      <body>
          ${html}

          <script>
          {
              ${js}
          }
          </script>
      </body>
      </html>`;
}
