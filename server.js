const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.static("public"));

app.get("/create-mad-libs", (req, res) => {
  const name = req.query.name;
  const adjective = req.query.adjective1;
  const noun1 = req.query.noun1;
  const verb = req.query.verb;
  const adjective2 = req.query.adjective2;
  const noun2 = req.query.noun2;
  console.log("Name:", name);
  console.log("Adjective:", adjective);
  console.log("noun1:", noun1);
  console.log("verb:", verb);
  console.log("adjective2:", adjective2);
  console.log("noun2:", noun2);

  res.send(`
    <p> One day, ${name} and a friend woke up feeling very ${adjective}.
They decided to ${verb} down the street, carrying a ${noun1}.
On the way, they spotted a very ${adjective2} ${noun2}, which surprised them.
Without thinking, ${name} laughed and said,
"Well, this day just got interesting!"</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
