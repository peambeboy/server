const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await db.Usersinfo.findAll();
  res.json(listOfPosts);
});

router.post("/save-email", async (req, res) => {
  try {
    const { email } = req.body; // รับข้อมูล email จาก body

    // ตรวจสอบว่า email ซ้ำหรือไม่
    const existingUser = await db.Usersinfo.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // สร้างรายการใหม่ในตาราง Usersinfo
    const newUser = await db.Usersinfo.create({ email });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error saving email:", error);
    return res.status(500).json({ error: "Could not save email" });
  }
});

router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const existingUser = await db.Usersinfo.findOne({ where: { id: userId } });

    if (!existingUser) {
      return res.status(404).json({ error: "ไม่พบผู้ใช้ที่ต้องการอัปเดต" });
    }

    // อัปเดตข้อมูลผู้ใช้
    await existingUser.update(updatedData);

    return res.json({ message: "อัปเดตข้อมูลผู้ใช้สำเร็จ" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้" });
  }
});

router.delete("/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    // ค้นหาและลบโพสต์ด้วย ID
    const deletedPost = await db.Usersinfo.destroy({
      where: { id: postId },
    });

    if (deletedPost) {
      res.json({ message: "ลบข้อมูลสำเร็จ" });
    } else {
      res.status(404).json({ error: "ไม่พบข้อมูลที่ต้องการลบ" });
    }
  } catch (error) {
    res.status(500).json({ error: "เกิดข้อผิดพลาดในการลบข้อมูล" });
  }
});

module.exports = router;
