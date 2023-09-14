const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req , res) =>{
    const listOfPosts = await db.Usersinfo.findAll();
    res.json(listOfPosts);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await db.Usersinfo.create(post);
  res.json(post);
});


module.exports = router;
