const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
app.use(express.static('public'));
app.get('/', function(req, res) {
      res.sendFile('index.html');
});
app.get('/invite', function(req, res) {
      res.redirect("https://discord.gg/jFdyhnaQyq")
})
app.get('/questionary', function(req, res) {
      res.redirect("https://docs.google.com/forms/d/e/1FAIpQLSeiJtrYEeDqNc9eb9U5qqphTAaJQGsusgbP9rIw98sk1wpomA/viewform")
})
app.get('/uptime', function(req, res) {
      res.send("Success.")
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
