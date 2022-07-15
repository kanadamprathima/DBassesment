const express = require("express");

const houseRouter = require("./routers/house");
const characterRouter = require("./routers/character");

const app = express();

const PORT = 4000;
app.use(express.json());

app.use(houseRouter);
app.use(characterRouter);

app.listen(PORT, () => console.log("listening on ", PORT));
