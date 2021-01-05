import express from "express";

const app = express();
const PORT = 3000;

app.get("/logger", (_, res) => {
  console.log("This is an error log");
  console.log("This is a warn log");
  console.log("This is a info log");
  console.log("This is a http log");
  console.log("This is a debug log");

  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is up and running @ http://localhost:${PORT}`);
});
