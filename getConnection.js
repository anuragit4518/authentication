const mongoose = require("mongoose");

const getConnection = async () => {
    try {
         mongoose.connect(process.env.MONGO_URI)
         .then((connection) =>{
            console.log("db is connected");
         })
         .catch((error) =>{
            console.log("failed to connect");
         })
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
       
    }
};

module.exports = getConnection;
   