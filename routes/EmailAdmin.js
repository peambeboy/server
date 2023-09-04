const express = require('express');
const router = express.Router();
const { Email } = require('../models');

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
  
    // ค้นหาอีเมล์ในตาราง emails
    const result = await Email.findOne({
      where: { Email: email }
    });

    if (result) {
      res.json({ isAdmin: true });
    } else {
      res.json({ isAdmin: false });
    }
  } catch (err) {
    console.error('เกิดข้อผิดพลาดในการค้นหาในฐานข้อมูล:', err);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการตรวจสอบอีเมล์' });
  }
});

module.exports = router;