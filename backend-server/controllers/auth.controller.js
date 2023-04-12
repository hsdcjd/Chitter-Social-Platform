import user from '../models/user.model.js';

export const signUp = (req, res) => {
    //authentication and registration logic here
    
    if (true) {
        res.status(200).json({ message: 'Authentication/Registration successful' })
    } else {
        res.status(401).json({ message: 'Authentication/Registration failed' });
    }
};

//get this from Ed's full stack node express validator auth.controller.js
// need something else to go in place of true!!!!

