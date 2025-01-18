const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scratch");
// mongoose.connect(`${config.get("MONGODB_URI")}/scratch`); 

const ownerSchema = mongoose.Schema({ 
    fullName: String,
    email: String, 
    password: String,
    products:  { 
        type: Array,
        default: []
    },
    picture: String,
    gstin: String,

})

module.exports = mongoose.model("owner", ownerSchema); 

