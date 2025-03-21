import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default:false
    },
    profilePicture: String,
    coverPicture: String,
    about:String,
    livesin:String,
    worksAt:String,
    relationship: String,
    followers:[],
    following:[],
}
)

userSchema.set("timestamps",true)

const userModel = mongoose.model("User", userSchema)

export default userModel