import { genSalt, hash } from "bcryptjs";
import userModel from "../models/UserModel.js";

// get a user

export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await userModel.findById(id);

        if (user) {
            const { password, ...otherDetails } = user._doc;
            res.status(200).json(otherDetails);
        } else {
            res.status(404).json({ message: "user not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update user

export const updateUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId, currentUserAdminStatus, password } = req.body;

    if (id === currentUserId || currentUserAdminStatus) {
        try {
            if (password) {
                const salt = await genSalt(10);
                const hashpassword = await hash(password, salt);
                req.body.password = hashpassword;
            }
            const user = await userModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(403).json({
            message: "Access Denied! You can only update your profile",
        });
    }
};

// delete user

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId, currentUserAdminStatus } = req.body;

    if (currentUserAdminStatus || currentUserId === id) {
        try {
            await userModel.findByIdAndDelete(id);
            res.status(200).json("User deleted successfully");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(403).json({
            message: "Access Denied! You can only delete your profile",
        });
    }
};

// follow user

export const followUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId } = req.body;

    if (currentUserId === id) {
        res.status(403).json({ message: "Action forbidden!" });
    } else {
        try {
            const followUser = await userModel.findById(id)
            const followingUser = await userModel.findById(currentUserId)

            if(!followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$push:{followers:currentUserId}})
                await followingUser.updateOne({$push:{following:id}})
                res.status(200).json({message:"user followed"})
            }else{
                res.status(403).json({message:"User is already followed by you"})
            }

        } catch (error) {
            res.status(403).json({
                message: error.message,
            });
        }
    }
};


// unfollow user

export const unfollowUser = async (req,res) => {
    const id = req.params.id;

    const { currentUserId } = req.body;

    if (currentUserId === id) {
        res.status(403).json({ message: "Action forbidden!" });
    } else {
        try {
            const followUser = await userModel.findById(id)
            const followingUser = await userModel.findById(currentUserId)

            if(followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$pull:{followers:currentUserId}})
                await followingUser.updateOne({$pull:{following:id}})
                res.status(200).json({message:"user followed"})
            }else{
                res.status(403).json({message:"User is not followed by you"})
            }

        } catch (error) {
            res.status(403).json({
                message: error.message,
            });
        }
    }
}