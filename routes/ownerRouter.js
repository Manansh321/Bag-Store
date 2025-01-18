const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model")   
 
router.get("/", (req, res)=> {
    res.send("owner page!");
}) 
 
router.post("/create", async (req, res)=> {  
    let onwers = await ownerModel.find(); 
    if (onwers.length > 0 ) {
        return res.status(503).send("u dont have permisiion to  create a new user!")
    }
 
    let {fullname, email, password } = req.body

    let createdOwner = await ownerModel.create({  
        fullname ,  
        email ,
        password,
        
    }) 
    res.status(503).send(createdOwner);  
 
})

router.get("/admin", (req, res) => {  
    let success = req.flash("success", "created");   
    res.render("createproducts", { success }); 
}) 

module.exports = router; 
    