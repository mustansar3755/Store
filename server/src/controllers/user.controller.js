import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Token Creation Function
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// User Registeration
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check if email already exist
    const exist = await userModel.findOne({ email });

    if (exist) {
      return res.json({ success: false, message: "Email Already Exist" });
    }

    // Email Validation
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter Valid Email ",
      });
    }
    // Strong Password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter Strong Password more that 8 chracter's",
      });
    }
    // hasing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create New User

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = newUser.save();

    // Token
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User Login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check If email user present
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does't Exist" });
    }

    //Match User entered password with DB Stored Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Wrong Paawrod Please Enter Correct Password",
      });
    }
    //Login User
    else {
      const token = createToken(user._id);
      res.json({ success: true, token });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// AdminLogin
const adminLogin = async (re1, res) => {
  res.json({ msg: "AdminLogin API Working" });
};

export { userLogin, userRegister, adminLogin };
