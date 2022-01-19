const router = require("express").Router();

router.get("/", (req, res) => res.status(200).json({ msg: "Hello from data" }));

module.exports = router;
