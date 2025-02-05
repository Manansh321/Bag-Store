// const { default: mongoose } = require("mongoose")
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scratch");  

const userSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "products",
    }],
    // isAdmin: Boolean,
    orders:  {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,

})

module.exports = mongoose.model("user", userSchema);

