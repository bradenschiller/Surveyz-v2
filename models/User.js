const mongoose = require("mongoose");
const { Schema } = mongoose;

//creating a user in mongodb
const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
