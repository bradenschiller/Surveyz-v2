const mongoose = require("mongoose");
const { Schema } = mongoose;

//creating a user in mongodb
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);
