const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://USERID:USERPASSWORD@cluster0.dycpqbt.mongodb.net/", // ENTER THESE THIS USER ID AND USER PASSWORD OK
    );
    console.log("MongoDb Coonected");
  } catch (error) {
    console.log("Error in db", error);
  }
};
module.exports = connectDb;
