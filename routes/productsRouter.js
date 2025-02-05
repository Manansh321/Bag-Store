const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.get("/", (req, res) => {
  res.send("product page!");
});

router.post("/create", upload.single("image"), async (req, res) => {
  // res.send(req.file);

  try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    const product = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });

    req.flash("success, product created successfully!"); 
    res.redirect("/owners/admin");
    // res.send(product);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
 
