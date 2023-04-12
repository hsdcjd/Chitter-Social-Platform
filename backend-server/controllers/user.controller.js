//all the logic handlers for our routes
import UserSchema from '../models/user.model.js';


// export const getUser = (req, res) => {
//     res.send('THIS getUser WORKS!');
// };

export const createUser = async (req, res) => {
  try {
    const newUser = new UserSchema(req.body);
    const savedUser = await newUser.save();
    //console.log(req.body);
    res.json({ message: 'Registration is successful', user: savedUser });
  } catch (error) {
    if (error.code === 11000) {
      console.log(error.code);
      res.status(500).send('This username and/or email already exists');
    } else {
      res.status(500).send('possible server error');
    }
  }
};
//The getUser function simply sends back a string to the client to confirm that the route is working as expected. The createUser function also sends a string back to the client, but they could be modified to create and save new users to the database. DONE

export const getUserByUsernameOnly = async (req, res) => {
  try {
    const { username, password } = req.body;
    await UserSchema.findOne({ username: username, password: password }).then(user => {
      if (!user) {
        res.status(404).send({ message: `User not found` });
      } else {
        res.send({ message: `Login success`, user: user });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

// export const getUserById = (req, res) => {              //probably don't need
//   UserSchema.findById(req.params.userId, (err, user) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.json(user);
//     }
//   });
// };

// export const updateUser = (req, res) => {                   //probably don't need
//   UserSchema.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.json(user);
//     }
//   });
// };

// export const deleteUser = (req, res) => {                   //probably don't need
//   UserSchema.remove({ _id: req.params.userId }, (err, user) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.json({ message: 'User successfully deleted' });
//     }
//   });
// };