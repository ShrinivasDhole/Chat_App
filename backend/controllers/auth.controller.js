import bcrypt from 'bcryptjs'
import User from "../models/user.model.js";
import generateTokenAndSetCookies from '../utils/generateToken.js';
export const signup = async(req ,res)=>{
    try {
        const {fullName , username , password , confirmPassword , gender} = req.body;

        
        if(password!==confirmPassword){
            return res.status(400).json({errr: 'Passwords do not match'} );
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json( {error : 'User already exists'}) ;
        }

        // Hash password here

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = await User.create({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic:gender === "male" ? boyProfilePic : girlProfilePic
        })
        generateTokenAndSetCookies(newUser._id,res) 
        res.status(201).json({
            _id:newUser._id, 
            fullName:newUser.fullName, 
            username:newUser.username, 
            profilePic:newUser.profilePic
        })
    } catch (error) {
        console.log("Error in signup controller" , error.message)
        res.status(500).json({error: 'Server Error'})
    }
}
export const login = async(req ,res)=>{
    try {
        const {username , password } = req.body;

        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password , user?.password || "");
        
        if(!user || !isPasswordCorrect){
            return res.status(400).json( {error : 'Invalid username or password'}) ;
        }

        
        generateTokenAndSetCookies(user._id,res) ;
        res.status(201).json({
            _id:user._id, 
            fullName:user.fullName, 
            username:user.username, 
            profilePic:user.profilePic
        })
    } catch (error) {
        console.log("Error in login controller" , error.message)
        res.status(500).json({error: 'Server Error in login'})
    }
}

export const logout = (req ,res)=>{
    //remove the cookies from client side and set expire time to past
   
    try { 
        res.cookie("jwt","" , {maxAge:0})
        res.status(200).json("Loggedout successfully");
        
    } catch (error) {
        console.log("Error in logout controller" , error.message)
        res.status(500).json({error: 'Server Error in logout'})
    }
}

