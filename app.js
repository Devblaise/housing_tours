const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

const tours = JSON.parse(
  fs.readFileSync(
    path.join(
      `${__dirname}`,
      "starter",
      "dev-data",
      "data",
      "tours-simple.json"
    )
  )
);

// console.log(tours);

app.get("api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${3000}!`);
});
