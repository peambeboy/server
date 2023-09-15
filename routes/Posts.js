const express = require("express");
const router = express.Router();
const db = require("../models");
const multer = require("multer");
const upload = multer();

router.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const imageName = req.body.name || "Untitled Image"; // รับชื่อรูปภาพจากผู้ใช้หรือใช้ 'Untitled Image' หากไม่ระบุ
    const imageCategory = req.body.category || "Uncategorized"; // รับหมวดหมู่จากผู้ใช้หรือใช้ 'Uncategorized' หากไม่ระบุ
    const imageDescription = req.body.detail || "No description provided"; // รับคำอธิบายรูปภาพจากผู้ใช้หรือใช้ 'No description provided' หากไม่ระบุ
    const imageMimeType = req.file.mimetype;
    const imageData = req.file.buffer;
    const imagePrice = req.body.price || 0; // รับราคาจากผู้ใช้หรือใช้ 0 หากไม่ระบุ
    const imageAmount = req.body.amount || 1; // รับจำนวนจากผู้ใช้หรือใช้ 1 หากไม่ระบุ

    // บันทึกข้อมูลรูปภาพลงในฐานข้อมูล
    const image = await db.Posts.create({
      name: imageName,
      category: imageCategory, // กำหนดหมวดหมู่ตามความเหมาะสม
      detail: imageDescription, // ใช้คำอธิบายรูปภาพที่ผู้ใช้ระบุ
      price: imagePrice, // ราคาที่ผู้ใช้ระบุ
      amount: imageAmount, // จำนวนที่ผู้ใช้ระบุ
      ImageData: imageData,
      ImageMimeType: imageMimeType,
    });

    res.json({ message: "Image uploaded successfully", image });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/get-image/:id", async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await db.Posts.findByPk(imageId);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    // ส่งข้อมูลรูปภาพกลับไปยังไคลเอนต์พร้อม Content-Type
    res.setHeader("Content-Type", image.ImageMimeType);
    res.send(image.ImageData);
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  const listOfPosts = await db.Posts.findAll();
  res.json(listOfPosts);
});

router.get("/check-email", async (req, res) => {
  const listOfPosts = await db.Email.findAll();
  res.json(listOfPosts);
});

router.post("/email", async (req, res) => {
  const post = req.body;
  await db.Email.create(post);
  res.json(post);
});

router.delete("/delete-email/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    // ค้นหาและลบโพสต์โดยใช้ ID
    const deletedPost = await db.Email.destroy({
      where: { id: postId },
    });

    if (deletedPost) {
      res.json({ message: "ลบอีเมลสำเร็จ" });
    } else {
      res.status(404).json({ error: "ไม่พบอีเมลที่ต้องการลบ" });
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "เกิดข้อผิดพลาดในการลบอีเมล" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await db.Posts.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // ส่งข้อมูลสินค้ากลับไปยังไคลเอนต์
    res.json(post);
  } catch (error) {
    console.error("Error fetching post data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    // ค้นหาและลบโพสต์โดยใช้ ID
    const deletedPost = await db.Posts.destroy({
      where: { id: postId },
    });

    if (deletedPost) {
      res.json({ message: "ลบสินค้าสำเร็จ" });
    } else {
      res.status(404).json({ error: "ไม่พบสินค้าที่ต้องการลบ" });
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "เกิดข้อผิดพลาดในการลบสินค้่า" });
  }
});

module.exports = router;
