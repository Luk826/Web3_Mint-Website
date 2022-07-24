const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});


router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/style.css"));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");

/*const express = require("express");
const app = express();
const fs = require("fs");
const { get } = require("http");

app.get("/", function (request, response) {
  response.sendFile("/index.html");
});*/

/*fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(req, res) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});*/

/*app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).send("Home Page");
});

app.get("/data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json(list);
});

app.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(404).send("Not implemented");
});

app.use(function (req, res, next) {
  res.status(404);
  res.json({ status: "error", msg: "API not implemented" });
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});*/
