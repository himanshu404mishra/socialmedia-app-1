import userModel from "../models/UserModel.js";
import { genSalt, hash, compare } from "bcryptjs";



// register user
export const registerUser = async function (req, res) {
    const { username, password, firstname, lastname } = req.body;

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = await userModel.findOne({
        username
    })
    if(!user){
        const newUser = new userModel({
            username,
            password: hashedPassword,
            firstname,
            lastname,
        });
    
        try {
            await newUser.save();
            return res.status(200).json(newUser);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    return res.status(400).json({message:"username already exists"})
   
};


// login user

export const loginUser = async function (req,res) {
    const {username, password} = req.body;

    try {
        const user = await userModel.findOne({username})

        if(user)
        {
            const validity = await compare(password, user.password)

            validity ? res.status(200).json(user) : res.status(400).json({message:"Username or password is not correct"})
        }
        else{
            res.status(400).json({message:"Username or password is not correct"})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}