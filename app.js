const express = require("express");
const app = express();

// flash is  not working in ownerRouter.js

const cookieParser = require("cookie-parser");  
const path = require("path");
const db = require("./config/mongoose-connection");
const ownerRouter = require("./routes/ownerRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const index = require("./routes/index");
const expressSession = require("express-session");
const flash = require("connect-flash"); // pad lena ye badme
  
require("dotenv").config();
 
const port = 5001;
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET, 
})
);
app.use(flash());
 
app.use(express.static(path.join(__dirname, "public"))); 
app.set("view engine", "ejs");
 
app.use("/", index); 
app.use("/owners", ownerRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(port, () => { 
  console.log(`app is listning at: ${port}`);
});
 



















// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs")

// app.use(expressSession({
//   resave : false,
//   saveUninitialized: false,
//   secret: process.env.EXPRESS_SESSION_SECRET, 
// }))