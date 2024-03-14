import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (userId , res) =>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET , { expiresIn: '15d' });  // 1 hour
    res.cookie("jwt",token,{
        maxAge: 1000 * 60 * 60 * 24 * 15,   // 15 days
        httpOnly:true, //Prevent XSS attacks its only accessible by http
        sameSite:"strict", //CSRF Attacks Cross-site request forgery attacks
        secure:process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookies;