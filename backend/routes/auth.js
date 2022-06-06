const router = require("express").Router();

const CLIENT_URL = "https://localhost:3000/";

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(CLIENT_URL);
});

module.exports = router;
