const router = require("express").Router();

router.get("/", (req, res) => {
  // Remove all query parameters that begin with "_" before sending the response
  let queries = {};
  //do soemthing to filter queries
  for (const [key, value] of Object.entries(req.query)) {
    if (key.startsWith("_")) {
      continue;
    } else {
      queries[key] = value;
    }
  }

  res.status(200).json({ query: queries });
  // console.log(req.query);
});
module.exports = router;
