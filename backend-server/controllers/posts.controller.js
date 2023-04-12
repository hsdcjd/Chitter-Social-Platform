//all the logic handlers for our routes
import postPeepSchema from '../models/postPeep.model.js';


export const getPosts = async (req, res) => {
  //send a test response
  //res.send('THIS getPost WORKS!');

  try {
    const posts = await postPeepSchema.find({});    //query the database for all posts using postPeepSchema
    res.json(posts);     //send the posts as a JSON response, could put in a console.log
  } catch (error) {
    //handle error by sending an error response
    console.log(error);
    res.status(500).send(error);
  }
};


export const createPost = async (req, res) => {
  //send a test response
  //res.send('Post Creation');

  try {   //create a new post using postPeepScheme and save it to the database
    const newPost = new postPeepSchema(req.body);
    const savedPost = await newPost.save();
    console.log(req.body);
    res.json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

  // newPost.save((err, post) => {
  //   if (err) {
  //     //handle error by sending an error response
  //     res.status(500).send(err); //or res.status(500).send('failed to create post');
  //   } else {
  //     //send the saved post as a JSON response
  //     res.json(post); //or res.status(201).send('post created successfully');
};

// export const getPostById = (req, res) => {                   //probably don't need
//   postPeepSchema.findById(req.params.postId, (err, post) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.json(post);
//     }
//   });
// };