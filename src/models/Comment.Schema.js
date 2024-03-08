import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment : {
        type: String,
        required : true
    },
    post :{
        type : Schema.Types.ObjectId,
        ref : 'Post',
        required : true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required : true
    }
}, {timestamps: true})

export const Comment = mongoose.model('Comment', commentSchema)