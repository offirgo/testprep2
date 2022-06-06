const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");

const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const authRoot = require("./routes/auth");

const app = express();

app.use(
	cookieSession({
		name: "session",
		keys: ["nbtp"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "https://localhost:3000",
		methods: "GET, POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoot);

/*app.listen("5000", () => {
	console.log("server is running!!");
});
*/

const sslServer = https.createServer(
	{
		key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
		cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
	},
	app
);

sslServer.listen(5000, () => console.log("secure server is running!!"));
