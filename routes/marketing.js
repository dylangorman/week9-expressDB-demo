const router = require("express").Router();

router.get("/", (req, res) => res.status(200).send("marketing"));

module.exports = router;
