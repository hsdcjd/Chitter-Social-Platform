import mongoose from 'mongoose';

const postPeepSchema = mongoose.Schema({
    //title: String,
    content: String,
    username: String,
    //tags: [String],
    //selectedFile: String,
    //likeCount: {
    //     type: Number,
    //     default: 0
    // },

    createdAt: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model('postPeep', postPeepSchema);