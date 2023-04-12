import express from 'express';
import bodyParser from 'body-parser';     //not needed now as express has built-in middleware express.json() and express.urlencoded() ??
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.routes.js';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(bodyParser.json());
//do not have a dotenv.config() here;

//localhost:4000/   no not using this
//localhost:4000/posts  yes goes here
app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/signup', authRoutes);

// app.use(bodyParser.json({ type: 'application/json', strict: true })); //do I need this? it will parse objects and arrays
// //but not primitives like strings and numbers. Could just be this? app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());

//https://cloud.mongodb.com/v2/6410db46d2ef7e0657d27b85#/clusters

const CONNECTION_URL = 'mongodb+srv://CatherineD:Awriter1day@cluster0.f8bmki0.mongodb.net/Chitter?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);  this has given me errors in the console - what about findAndModify?
export default app;