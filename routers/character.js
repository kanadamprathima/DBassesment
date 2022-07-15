const express = require("express");
const Character = require("../models").character;

const { Router } = express;

const router = new Router();

//3)POST create a new character localhost:4000/characters

router.post("/characters", async (req, res, next) => {
  try {
    const { name, age, alive } = req.body;
    const newCharacter = await Character.create({ name, age, alive });
    res.send(newCharacter);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//http POST :4000/characters name='avi' age=22 alive=true

//4) PUT update a character age localhost:4000/characters/:id
router.patch("/characters/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { age } = req.body;
    const userUpdate = await Character.findByPk(id);
    const updated = await userUpdate.update({ age });

    res.send(updated);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//http PATCH :4000/characters/1 age=27

module.exports = router;
