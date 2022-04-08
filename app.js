const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
// создаем парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = express.urlencoded({ extended: false });

app.get("/", function (req, res) {
	// res.sendFile(__dirname + "/index.html");
	// res.send("<h2>Hello</h2>");
	res.send(JSON.stringify("hello"));
});

app.post("/check", function (req, res) {
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.send(`${req.body.userName} - ${req.body.userAge}`);
});

app.listen(8000, () => console.log("Сервер запущен..."));
