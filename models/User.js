const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      img: {
         type: String,
         default:
            "https://fr.gravatar.com/userimage/108415600/3a20cb4e62d269b3e31d676f5a03e36b.png",
      },
      isAdmin: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
