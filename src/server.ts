import express from 'express';
import mongoose from 'mongoose';
import { configs } from './config/config';
const app = express();
app.use(express.json());
import index from './routes/index';
import PostRoutes from './routes/Post';


/* Connecto to Mongo */
mongoose.connect(configs.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => { console.log("connected") })
    .catch((error) => { console.log(error) });



app.listen(configs.server.port, () => {
    console.log(`[server]: Server is running at http://localhost:${configs.server.port}`);
});


app.use('/',index);
app.use('/post',PostRoutes);

