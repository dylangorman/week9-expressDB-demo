require("dotenv").config();

const express = require("express");
const app = express();

const dataRouter = require("./routes/data");
const marketingRouter = require("./routes/marketing");
const accountingRouter = require("./routes/accounting");
const indexRouter = require("./routes/index");
const errorRouter = require("./routes/error");

app.use(express.json());
app.use("/", indexRouter);
app.use("/accounting", accountingRouter);
app.use("/marketing", marketingRouter);
app.use("/data", dataRouter);
app.use("*", errorRouter);

app.listen(process.env.HTTP_PORT, () => {
  console.log("App online");
});
