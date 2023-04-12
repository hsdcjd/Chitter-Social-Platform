import express from 'express';

import { getPosts, createPost } from '../controllers/posts.controller.js'; //right now just with one, may not be clear why the controllers and routes are separated out, but as we add more routes, it will look cleaner here. And all the functions will be in controllers/post 

const router = express.Router();


// router.get('/', (req, res) => {
//     res.send('you are in posts router doing get request');   //this works but take out into the controller
// });

router.get('/', getPosts);
router.post('/', createPost);  

export default router;

//added a POST route to handle the creation of new posts. The createPost function from the controllers/posts.controller.js file will be called when this route is hit with a POST request.