import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        //no profileimage, followers, following, description
    },
    { timestamps: true }    //not sure if this is needed for a UserSchema?
);

export default mongoose.model('user', UserSchema);





// * You don't have to be logged in to see the peeps.
// * Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewright@digitalfutures.com, password123, Ed Wright, edwright6975).
// * The username and email are unique.
// * Peeps (posts to chitter) have the name of the trainee and their user handle.