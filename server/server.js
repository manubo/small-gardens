const express = require("express")

const app = express();
const port = 8000;


app.get("/login", (req, res) => {
  if (req.query.username == "simply" && req.query.password == "simply") {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});


app.listen(port, () => console.log(`server listening on port ${port}`))
