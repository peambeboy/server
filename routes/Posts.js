const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", async (req , res) =>{
    const listOfPosts = await db.Posts.findAll();
    res.json(listOfPosts);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await db.Posts.create(post);
    res.json(post);
});

router.get("/check-email", async (req , res) =>{
    const listOfPosts = await db.Email.findAll();
    res.json(listOfPosts);
});

router.post("/email", async (req, res) => {
    const post = req.body;
    await db.Email.create(post);
    res.json(post);
});

router.get('/:id', async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await db.Posts.findByPk(postId);
      
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // ส่งข้อมูลสินค้ากลับไปยังไคลเอนต์
      res.json(post);
    } catch (error) {
      console.error('Error fetching post data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = router;