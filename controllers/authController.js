const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");


module.exports.registerUser = async (req, res) => {
  try {
    let { fullName, email, password } = req.body;

    let userA = await userModel.findOne({ email: email });
    if (userA) {
       res.flash( "you already have an account!, please login");
       return res.redirect("/");
    } 
 
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          res.send(err.message);
          
        } else {
          let user = await userModel.create({
            fullName,
            email,
            password: hash,
          });
        //   console.log(password);
        //   console.log(hash);
          let token = generateToken(user);
          res.cookie("token", token); 

          res.send("user created successfully!");
        }
      });
    });
  }
   catch (err) {
    res.status(500).send(err.message);
  }
};


module.exports.loginUser = async (req, res)=> {      
  let { email, password } = req.body;

  let user = await userModel.findOne( {email: email} );

  if (!user) {
    return res.send("u dont have an account please create account first!") 
  }

  bcrypt.compare(password, user.password, function(err, result) {  
    if (result)  { 
      let token = generateToken(user); 
      res.cookie("token", token); 
       res.redirect("/shop");   
      // console.log("u can login !");  
      
    }
    else {
      req.flash("error", "Email or password incorrect" ); 
      return res.redirect("/") ;
    }
  }); 
}

module.exports.logout = function(req, res) {
  res.cookie("token", "");
  res.redirect("/");
}

