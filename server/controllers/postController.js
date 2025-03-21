import mongoose from "mongoose";
import postModel from "../models/PostModel.js";
import userModel from "../models/UserModel.js";

// create new post

export const createPost = async (req, res) => {
    const newPost = new postModel(req.body);

    try {
        await newPost.save();
        res.status(200).json({ message: "Post created" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get a post

export const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await postModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update a post

export const updatePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;

    try {
        const post = await postModel.findById(postId);
        if (post.userId === userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json({ message: "Post updated" });
        } else {
            res.status(403).json({ message: "action forbidden" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete a post

export const deletePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;

    try {
        const post = await postModel.findById(id);
        if (post.userId === userId) {
            await post.deleteOne();
            res.status(200).json({ message: "Post deleted successfully" });
        } else {
            res.status(403).json({ message: "action forbidden" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// like/dislike a post

export const likePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        const post = await postModel.findById(id);
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } });
            res.status(200).json({ message: "Post liked" });
        } else {
            await post.updateOne({ $pull: { likes: userId } });
            res.status(200).json({ message: "Post unliked" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get timeline post

export const getTimeLinePost = async (req, res) => {
    const userId = req.params.id;

    try {
        const currentUserPosts = await postModel.find({ userId });
        const followingPosts = await userModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId),
                },
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts",
                },
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0,
                },
            },
        ]);
        res.status(200).json(
            currentUserPosts.concat(...followingPosts[0].followingPosts)
            .sort((a,b)=>{
                return b.createdAt - a.createdAt
            })
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
