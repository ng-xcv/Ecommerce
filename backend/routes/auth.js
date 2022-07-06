const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
   const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
         req.body.password,
         process.env.PASSWORD_SECRET
      ),
   });

   try {
      const result = await newUser.save();
      res.status(201).send(result);
   } catch (error) {
      res.status(500).send(error);
   }
});

router.post("/login", async (req, res) => {
   try {
      const user = await User.findOne({
         $or: [{ username: req.body.username }, { email: req.body.email }],
      });
      !user && res.status(401).send("Invalid username or password ;( ");
      const hashedPassword = CryptoJS.AES.decrypt(
         user.password,
         process.env.PASSWORD_SECRET
      ).toString(CryptoJS.enc.Utf8);

      hashedPassword !== req.body.password &&
         res.status(401).send("Invalid username or password  ;( ");

      const accessToken = jwt.sign(
         {
            id: user._id,
            isAdmin: user.isAdmin,
         },
         process.env.JWT_SECRET,
         { expiresIn: "3d" }
      );

      const { password, ...others } = user._doc;

      

      res.status(200).send({ ...others, accessToken });
   } catch (error) {
      res.status(500).send(error);
   }
});

module.exports = router;
