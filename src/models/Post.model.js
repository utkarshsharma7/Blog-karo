import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},
{timestamps: true});

export const Post = mongoose.model("Post", postSchema);