const mongoose = require("mongoose");
const config = require("config")      

mongoose.connect(`${config.get("MONGODB_URI")}/scratch`)
.then(()=>{
    console.log("working! ");    
}).catch((e)=> {
    (`error occured: ${e}`);
    
})

 module.exports = mongoose.connection ;
 