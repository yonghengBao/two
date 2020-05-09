const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post("/user/login", (req, res) => {
  const { username } = req.body;

  if (username === "admin" || username === "home") {
    res.json({
      code: 1,
      data: username
    });
  } else {
    res.json({
      code: 10204,
      message: "用户名或密码错误"
    });
  }
});

app.get("/user", (req, res) => {
  res.json({
    code: 1,
    data: ['124']
  });
});
app.get("/user/info", (req, res) => {
  const roles = req.headers['authorization'].split(' ')[1]==="admin" ? ["admin"] : ["home"];
  res.json({
    code: 1,
    data: roles
  });
});

app.listen(3000);
