const express = require('express');
const router = express.Router();
const Food = require("../models/User");
const mongoose = require('mongoose');

router.post("/createuser", async (req, res,next) => {
  try {
    console.log("Creating user...");
    await Food.create({
      name: "Shyam",
      location: "Bhopal",
      password: "12345",
      email: "krish@123"
    });

    
      next();



    console.log("User created successfully");
    res.json({ success: true });
  } catch (error) {
    console.error("Error creating user:", error);
    res.json({ success: false });
  }
});


module.exports = router;
