const express = require("express");
const House = require("../models").house;

const { Router } = express;

const router = new Router();

//GET all houses localhost:4000/houses
router.get("/houses", async (req, res, next) => {
  try {
    const houses = await House.findAll();
    res.send(houses);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
//http :4000/houses

//2) GET a specific house, including all its characters localhost:4000/houses/:id
router.get("/houses/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const actualHouse = await House.findByPk(id);
    res.send(actualHouse);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
//http :4000/houses/4

module.exports = router;
