import express from 'express';

import { createUser, getUserByUsernameOnly } from '../controllers/user.controller.js'; //right now just with one, may not be clear why the controllers and routes are separated out, but as we add more routes, it will look cleaner here. And all the functions will be in controllers/post 

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('you are in user router doing get request');   //this works but take out into the controller
// });

router.post('/login', getUserByUsernameOnly);

router.post('/', createUser);  


export default router;

//we will create as many routers in here as we like, internally

// import express from 'express';
// export const router = express.Router();

// router.get('/', (req, res) => {
//   res.render('index');
// })

// //module.exports = router;
// //export default index;

