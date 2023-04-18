const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "/mongodb+srv://yunseo3269:<dldbstj3269!>@boilerplate.a85fptm.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 헤헤");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//mongodb+srv://yunseo3269:<password>@boilerplate.a85fptm.mongodb.net/?retryWrites=true&w=majority
