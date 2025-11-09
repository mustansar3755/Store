import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized. Please Login Again.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Invalid Admin Credentials" });
    }

    next(); // ✅ Only runs if verified
  } catch (error) {
    console.log("Auth Error:", error);
    res.json({ success: false, message: "Authentication Failed" });
  }
};

export default adminAuth;
