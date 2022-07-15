const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
const Character = require("./models").character;
//const House = require("./models").house;

app.use(express.json());

app.post("/characters", async (req, res, next) => {
  try {
    const { name, age, alive, houseId } = req.body;

    if (!houseId || houseId === " ") {
      res.status(400).send("houseId must be provided");
    } else {
      const newCharacter = await Character.create(req.body);
      res.json(newCharacter);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
//   ➕ Bonus 3 - Create User

// - POST the user info (name, email, password) to `localhost:4000/users/signup` to create a new user. Creating a user is only possible if `name`,`email`, and `password` is provided, and password is at least 6 characters long.

app.post("/users/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(404).send("parameters missing");
    } else {
      const newUser = await User.create(name, email, password);
      console.log(newUser);
      res.send(newUser);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
app.listen(PORT, () => {
  console.log(`listening port on ${PORT}`);
});
