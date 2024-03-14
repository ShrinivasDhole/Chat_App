import User from "../models/user.model.js";

export const getUserForSidebar = async(req ,res)=>{
    try {

        const loggedInUserId = req.user._id;

        //Include all the users in the database but not the current user
        const fiteredUsers =await User.find({_id : { $ne:loggedInUserId}}).select('-password');  //exclude password field while getting user data

        res.status(201).json(fiteredUsers);
        
    } catch (error) {
       
        console.log("Error in getUserForSidebar Controller : " ,error.message)
        res.status(500).json({error : "Internal Server error in getUserForSidebar"})
        
    }
}

export const searchUserForSidebar = async (req, res) => {
    const search = req.query.search || "";

    const users = await User.find({
        $or: [{
            fullName: {
                "$regex": search
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            fullName: user.fullName,
            _id: user._id
        }))
    })
}