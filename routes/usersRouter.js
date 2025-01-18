const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn"); 
const { registerUser, loginUser, logout } = require("../controllers/authController"); // Ensure this is correct

router.get("/", (req, res) => {
    res.send("user page!, hey its working"); 
});

router.post("/register", registerUser); 

router.post("/login", loginUser ) 

router.get("/logout", logout )  

module.exports = router;
   