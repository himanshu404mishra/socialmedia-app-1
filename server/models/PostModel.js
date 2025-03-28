import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
});

postSchema.set("timestamps",true)

const postModel = mongoose.model("post",postSchema)

export default postModel