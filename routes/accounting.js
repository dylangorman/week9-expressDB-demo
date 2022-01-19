const req = require("express/lib/request");

const router = require("express").Router();
// const getRandNum = require("../src/tools");

let staff = [
  { name: "Bob", age: 34 },
  { name: "Rita", age: 40 },
  { name: "Sue", age: 39 },
];

router.get("/", (req, res) =>
  res.status(200).json(
    staff.map((member, i) => {
      member.id = i + 1;
      return member;
    })
  )
);
//created a new memner of staff
router.post("/", (req, res) => {
  // console.log(req.body);
  staff.push(req.body);
  res.status(201).json({ msg: "Created, data: req.body" });
});
//delete all members of staff
router.delete("/", (req, res) => {
  staff = [];
  res.status(201).json({ msg: "Deleted All Staff", data: staff });
});

//get Individual member of staff
router.get("/:id", (req, res) => {
  if (req.params.id - 1 < 0 || req.params.id - 1 > staff.length) {
    res.status(404).json({ msg: `${req.params.id} not found` });
  } else {
    res.status(200).json(staff[req.params.id - 1]);
  }
});
//update an individual member of staff
router.put("/:id", (req, res) => {
  staff[req.params.id - 1] = req.body;
  res.status(200).json({ msg: `Updated ${req.params.id}`, data: req.body });
});
//delete individual member of staff
router.delete("/:id", (req, res) => {
  const removed = staff.splice(req.params.id - 1, 1);
  res.status(200).json({ msg: `Deleted ${req.params.id}`, data: removed });
});

router.get("/:name", (req, res) =>
  res.status(200).json({ name: req.params.name })
);
// const id = () => {
//   Math.floor(Math.random() * 1000);
//   return;
// };
// router.get("/staff/:name", (req, res) => {
//   console.log(req.params);
//   res.status(200).json({
//     staff: {
//       name: req.params.name,
//       age: req.params.age,
//       dept: "Acc",
//       id: getRandNum(1001, 10001),
//     },
//   });
// });

module.exports = router;
