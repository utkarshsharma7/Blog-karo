import mongoose from "mongoose";


const upvoteSchema = new mongoose.Schema({
    post : {
        type : Schema.Types.ObjectId,
        ref: Post
    },
    upvotedBy: {
        type : Schema.Types.ObjectId,
        ref: User
    },

}, {timestamps: true})

export const  Upvote = mongoose.model("Upvote",upvoteSchema)